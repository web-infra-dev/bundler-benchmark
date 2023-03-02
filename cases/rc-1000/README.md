# Get started
1. `pnpm i`
2. `pnpm run dev:bench` # run dev benchmark
3. `pnpm run build:bench` # run build benchmark





<!---benchStart-->
# Benchmark environment

## Linux
Intel(R) Xeon(R) Platinum 8260 CPU @ 2.40GHz 32Core, 64GB of RAM
## Mac
MacBookPro 2.6 GHz 6-Core Intel Core i7, 16GB of RAM

# Benchmark result

## Development 

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 1.381 ± 0.022 | 1.365 | 1.429 | 1.00 |
| `pnpm wdev` | 5.382 ± 0.056 | 5.284 | 5.488 | 3.90 ± 0.08 |
| `pnpm pdev` | 6.850 ± 0.140 | 6.638 | 7.120 | 4.96 ± 0.13 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 1.685 ± 0.029 | 1.644 | 1.728 | 1.00 |
| `pnpm wdev` | 5.426 ± 0.208 | 5.045 | 5.601 | 3.22 ± 0.14 |
| `pnpm pdev` | 7.915 ± 0.233 | 7.686 | 8.526 | 4.70 ± 0.16 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 4.613 ± 0.115 | 4.531 | 4.923 | 1.00 |
| `pnpm wbuild` | 15.350 ± 0.141 | 15.216 | 15.704 | 3.33 ± 0.09 |
| `pnpm pbuild` | 71.023 ± 0.769 | 70.165 | 72.372 | 15.40 ± 0.42 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 4.324 ± 0.061 | 4.215 | 4.418 | 1.00 |
| `pnpm wbuild` | 14.337 ± 0.436 | 13.836 | 15.070 | 3.32 ± 0.11 |
| `pnpm pbuild` | 52.784 ± 1.059 | 51.292 | 54.811 | 12.21 ± 0.30 |

<!---benchEnd-->
	
	
	
	
	
	
	