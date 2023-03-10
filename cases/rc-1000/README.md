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
| `pnpm rdev` | 1.399 ± 0.024 | 1.352 | 1.434 | 1.00 |
| `pnpm wdev` | 5.398 ± 0.065 | 5.319 | 5.513 | 3.86 ± 0.08 |
| `parcel` | 7.592 ± 0.076 | 7.494 | 7.701 | 5.43 ± 0.11 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 1.685 ± 0.029 | 1.644 | 1.728 | 1.00 |
| `pnpm wdev` | 5.426 ± 0.208 | 5.045 | 5.601 | 3.22 ± 0.14 |
| `parcel` | 7.915 ± 0.233 | 7.686 | 8.526 | 4.70 ± 0.16 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 4.690 ± 0.047 | 4.631 | 4.754 | 1.00 |
| `pnpm wbuild` | 15.656 ± 0.296 | 15.318 | 16.050 | 3.34 ± 0.07 |
| `pnpm pbuild` | 72.585 ± 0.894 | 71.149 | 73.524 | 15.48 ± 0.25 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 4.324 ± 0.061 | 4.215 | 4.418 | 1.00 |
| `pnpm wbuild` | 14.337 ± 0.436 | 13.836 | 15.070 | 3.32 ± 0.11 |
| `pnpm pbuild` | 52.784 ± 1.059 | 51.292 | 54.811 | 12.21 ± 0.30 |

<!---benchEnd-->
	
	
	
	
	
	
	
	
	
	