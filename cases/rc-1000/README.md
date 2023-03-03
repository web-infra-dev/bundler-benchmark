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
| `pnpm rdev` | 1.407 ± 0.030 | 1.371 | 1.459 | 1.00 |
| `pnpm wdev` | 5.445 ± 0.073 | 5.322 | 5.551 | 3.87 ± 0.10 |
| `pnpm pdev` | 7.675 ± 0.164 | 7.469 | 8.005 | 5.45 ± 0.17 |


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
| `pnpm rbuild` | 4.835 ± 0.092 | 4.706 | 4.985 | 1.00 |
| `pnpm wbuild` | 15.961 ± 0.143 | 15.629 | 16.091 | 3.30 ± 0.07 |
| `pnpm pbuild` | 71.913 ± 2.408 | 69.367 | 76.978 | 14.87 ± 0.57 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 4.324 ± 0.061 | 4.215 | 4.418 | 1.00 |
| `pnpm wbuild` | 14.337 ± 0.436 | 13.836 | 15.070 | 3.32 ± 0.11 |
| `pnpm pbuild` | 52.784 ± 1.059 | 51.292 | 54.811 | 12.21 ± 0.30 |

<!---benchEnd-->
	
	
	
	
	
	
	
	