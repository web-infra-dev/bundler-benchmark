import {
	readFile,
	writeFile,
	stat,
	rename,
	copyFile,
	rmdir,
	utimes,
	unlink,
} from "fs/promises";
import { spawn } from "child_process";
import { resolve } from "path";

export const alterFile = async (filePath, fn, options = {}) => {
	const orginalFile = `${filePath}.original`;
	let baseFile = filePath;
	try {
		if ((await stat(orginalFile)).isFile()) {
			baseFile = orginalFile;
		}
	} catch {}
	let content = null;
	try {
		content = await readFile(baseFile, "utf-8");
	} catch {}
	if (fn) {
		if (baseFile === filePath && content !== null) {
			await copyFile(filePath, orginalFile);
		}
		const newContent = fn(content);
		if (content !== newContent || baseFile !== filePath) {
			if (newContent === null) {
				try {
					await unlink(filePath);
				} catch {}
			} else {
				await writeFile(filePath, newContent);
				if (options.past) {
					await utimes(filePath, 1, 1);
				}
			}
		}
	} else if (baseFile !== filePath) {
		await rename(baseFile, filePath);
	}
};

export const revertFile = (filePath) =>
	alterFile(filePath, null, { past: true });

const runCommand = async (command, args, verbose) => {
	const p = spawn(command, args, {
		shell: true,
		stdio: verbose ? "inherit" : "ignore",
	});
	const exitCode = await new Promise((resolve) => p.once("exit", resolve));
	if (exitCode !== 0)
		throw new Error(`${command} ${args.join(" ")} failed with ${exitCode}`);
};

export const install = async (pnp, options) => {
	if (pnp) {
		await runCommand("yarn", ["set", "version", "berry"], options.verboseSetup);
	}
	await runCommand("yarn", ["install"], options.verboseSetup);
};

export const runScript = async (name, options) => {
	await runCommand("yarn", ["run", name], options.verboseSetup);
};

export const clearCaches = async (directory) => {
	const paths = ["node_modules/.cache", ".pnp.js", ".yarnrc.yml"];
	await Promise.all(
		paths.map((p) =>
			rmdir(resolve(directory, p), {
				recursive: true,
				maxRetries: 10,
			})
		)
	);
};

const T_TABLE = [
	12.71,
	4.303,
	3.182,
	2.776,
	2.571,
	2.447,
	2.365,
	2.306,
	2.262,
	2.228,
	2.201,
	2.179,
	2.16,
	2.145,
	2.131,
	2.12,
	2.11,
	2.101,
	2.093,
	2.086,
	2.08,
	2.074,
	2.069,
	2.064,
	2.06,
	2.056,
	2.052,
	2.048,
	2.045,
	2.042,
];

const tDist95Two = (n) => {
	if (n <= 1) return 12.71;
	if (n <= 30) return T_TABLE[n - 1];
	if (n <= 40) return 2.021;
	if (n <= 50) return 2.009;
	if (n <= 60) return 2.0;
	if (n <= 80) return 1.99;
	if (n <= 100) return 1.984;
	if (n <= 120) return 1.98;
	return 1.96;
};

export const calcStatistics = (results) => {
	const stats = {};
	for (const key of Object.keys(results[0])) {
		const values = results.map((r) => r[key]);
		if (typeof values[0] === "object") {
			stats[key] = calcStatistics(values);
		} else {
			values.sort();
			const mean = values.reduce((sum, v) => sum + v, 0) / values.length;
			const variance =
				values.reduce((sum, v) => sum + (mean - v) ** 2, 0) / values.length;
			const stdDev = Math.sqrt(variance);
			const confidence =
				(tDist95Two(values.length - 1) * stdDev) / Math.sqrt(values.length);
			stats[key] = {
				min: Math.min(...values),
				max: Math.max(...values),
				mean,
				median:
					values.length % 2 === 0
						? (values[values.length / 2 - 1] + values[values.length / 2]) / 2
						: values[(values.length - 1) / 2],
				variance,
				stdDev,
				confidence: confidence * 2,
				low: mean - confidence,
				high: mean + confidence,
				count: values.length,
			};
		}
	}
	return stats;
};

export const compareStatistics = (
	base,
	current,
	total = current.statsTime.mean
) => {
	const diff = {};
	for (const key of new Set([...Object.keys(base), ...Object.keys(current)])) {
		const baseValue = base[key];
		const currentValue = current[key];
		if (baseValue === undefined || currentValue === undefined) continue;
		if ("mean" in baseValue) {
			diff[key] = {
				relevance: currentValue.mean / total,
			};
			for (const k of Object.keys(baseValue)) {
				diff[key][k] = currentValue[k] / baseValue[k];
			}
			diff[key].lowHigh = currentValue.high / baseValue.low;
			diff[key].highLow = currentValue.low / baseValue.high;
			diff[key].baseStdDev = baseValue.stdDev / baseValue.mean;
			diff[key].currentStdDev = currentValue.stdDev / currentValue.mean;
			diff[key].baseConfidence = baseValue.confidence / baseValue.mean;
			diff[key].currentConfidence = currentValue.confidence / currentValue.mean;
		} else {
			diff[key] = compareStatistics(baseValue, currentValue, total);
		}
	}
	return diff;
};

export const formatDiffTable = (
	diff,
	{ colors, verbose, limit, threshold }
) => {
	let entries = Object.keys(diff).map((key) => ({ name: key, ...diff[key] }));
	entries.sort((a, b) => b.relevance - a.relevance);
	if (!verbose) {
		entries = entries.filter((e) => e.lowHigh < 1 || e.highLow > 1);
	}
	if (threshold) {
		entries = entries.filter((e) => e.relevance >= threshold);
	}
	if (limit) {
		entries = entries.slice(0, limit);
	}
	const offset = (factor) => {
		if (factor > 10) return `${Math.round(factor * 10) / 10}x`;
		if (factor > 1.1) return `+${Math.round(factor * 100 - 100)}%`;
		if (factor > 1) return `+${Math.round(factor * 1000 - 1000) / 10}%`;
		if (factor > 0.9) return `-${Math.round(1000 - factor * 1000) / 10}%`;
		return `-${Math.round(100 - factor * 100)}%`;
	};
	const percentage = (value) => {
		if (value > 10) return `${Math.round(value * 10) / 10}x`;
		if (value > 0.1) return `${Math.round(value * 100)}%`;
		if (value > -0.1) return `${Math.round(value * 1000) / 10}%`;
		return `${Math.round(value * 100)}%`;
	};
	const columns = {
		rel: (l) => `${Math.round(l.relevance * 10000) / 100}%`,
		diff: (l) =>
			l.lowHigh && l.lowHigh < 1
				? offset(l.lowHigh)
				: l.highLow && l.highLow > 1
				? offset(l.highLow)
				: "unclear",
		name: (l) => l.name,
		mean: (l) => offset(l.mean),
		...(verbose
			? {
					med: (l) => offset(l.median),
					min: (l) => offset(l.min),
					max: (l) => offset(l.max),
					std: (l) => offset(l.stdDev),
					con: (l) => offset(l.confidence),
			  }
			: undefined),
		baseCon: (l) => percentage(l.baseConfidence),
		curCon: (l) => percentage(l.currentConfidence),
	};
	const rows = entries.map((entry) =>
		Object.keys(columns).map((key) => columns[key](entry) || "")
	);
	const header = Object.keys(columns);
	const columnSizes = header.map((key, i) =>
		Math.max(key.length, ...rows.map((row) => row[i].length))
	);
	const getLine = (l) =>
		`| ${l
			.map((item, i) => `${item}${" ".repeat(columnSizes[i] - item.length)}`)
			.join(" | ")} |`;
	return [
		getLine(header),
		`| ${columnSizes.map((s) => "-".repeat(s)).join(" | ")} |`,
		...rows.map((row) => {
			const line = getLine(row);
			if (colors) {
				if (row[1].startsWith("+") || row[1].endsWith("x"))
					return `\u001b[1m\u001b[31m${line}\u001b[39m\u001b[22m`;
				if (row[1].startsWith("-"))
					return `\u001b[1m\u001b[32m${line}\u001b[39m\u001b[22m`;
			}
			return line;
		}),
	].join("\n");
};