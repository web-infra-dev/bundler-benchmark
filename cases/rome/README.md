# Get started
1. pnpm i 
2. pnpm bench:setup
3. pnpm patch:rome 
4. pnpm run dev:bench
5. pnpm run build:bench
<!---benchStart-->
# Benchmark environment
## Linux
Intel(R) Xeon(R) Platinum 8260 CPU @ 2.40GHz 32Core, 64GB of RAM
## Mac
Apple M1 Max 10 core, 32 GB of RAM

# Benchmark result

## Development 

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 1.288 ± 0.026 | 1.258 | 1.352 | 1.00 |
| `pnpm wdev` | 4.732 ± 0.040 | 4.680 | 4.801 | 3.68 ± 0.08 |
| `pnpm pdev` | 6.270 ± 0.213 | 6.120 | 6.843 | 4.87 ± 0.19 |


### Mac
| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 870.0 ± 46.9 | 805.3 | 977.3 | 1.00 |
| `pnpm wdev` | 2482.3 ± 212.0 | 2275.3 | 2990.1 | 2.85 ± 0.29 |
| `pnpm pdev` | 3675.4 ± 685.6 | 3086.6 | 5445.0 | 4.22 ± 0.82 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 2.680 ± 0.091 | 2.591 | 2.843 | 1.00 |
| `pnpm wbuild` | 8.994 ± 0.079 | 8.834 | 9.098 | 3.36 ± 0.12 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 1.312 ± 0.036 | 1.258 | 1.362 | 1.00 |
| `pnpm wbuild` | 4.300 ± 0.190 | 3.983 | 4.738 | 3.28 ± 0.17 |
| `pnpm pbuild` | 6.068 ± 0.264 | 5.838 | 6.759 | 4.63 ± 0.24 |

<!---benchEnd-->
	