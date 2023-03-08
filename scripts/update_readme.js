const fs = require("fs");
const path = require("path");

let casesDirPath = path.resolve(__dirname, "../cases");
let casesList = fs.readdirSync(casesDirPath, "utf-8");

const benchBlockReg = /<!---benchStart-->([\s\S]*)<!---benchEnd-->/;
let excludeList = ["rc-10000-hmr"];
for (let benchCase of casesList) {
	if (excludeList.includes(benchCase)) {
		continue;
	}
	let casePath = path.resolve(casesDirPath, benchCase);
	const readmePath = path.resolve(casePath, "README.md");
	if (!fs.existsSync(readmePath)) {
		fs.writeFileSync(readmePath, `<!---benchStart--><!---benchEnd-->`);
	}
	const generatedBlock = benchBlockGenerator(casePath);
	let readmeContent = fs.readFileSync(readmePath, "utf-8");
	readmeContent = readmeContent.replace(benchBlockReg, generatedBlock);
	fs.writeFileSync(readmePath, readmeContent);
}

function benchBlockGenerator(casePath) {
	const linuxDevMarkdownPath = "linux-dev.md";
	const linuxBuildMarkdownPath = "linux-build.md";
	const macBuildMarkdownPath = "mac-i7-build.md";
	const macDevMarkdownPath = "mac-i7-dev.md";

	let linuxBuildMarkdownContent = "";
	let linuxDevMarkdownContent = "";
	let macBuildMarkdownContent = "";
	let macDevMarkdownContent = "";
	try {
		linuxBuildMarkdownContent = fs.readFileSync(
			path.resolve(casePath, linuxBuildMarkdownPath),
			"utf-8"
		);
	} catch {}
	try {
		linuxDevMarkdownContent = fs.readFileSync(
			path.resolve(casePath, linuxDevMarkdownPath),
			"utf-8"
		);
	} catch {}
	try {
		macBuildMarkdownContent = fs.readFileSync(
			path.resolve(casePath, macBuildMarkdownPath),
			"utf-8"
		);
	} catch (err) {
		console.error(err);
	}
	try {
		macDevMarkdownContent = fs.readFileSync(
			path.resolve(casePath, macDevMarkdownPath),
			"utf-8"
		);
	} catch {}

	const template = `
<!---benchStart-->
# Benchmark environment

## Linux
Intel(R) Xeon(R) Platinum 8260 CPU @ 2.40GHz 32Core, 64GB of RAM
## Mac
MacBookPro 2.6 GHz 6-Core Intel Core i7, 16GB of RAM

# Benchmark result

## Development 

### Linux 
${linuxDevMarkdownContent}

### Mac
${macDevMarkdownContent}

## Production

### Linux 
${linuxBuildMarkdownContent}

### Mac
${macBuildMarkdownContent}
<!---benchEnd-->
	`;
	return template;
}
