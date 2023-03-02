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
MacBookPro 2.6 GHz 6-Core Intel Core i7, 16GB of RAM

# Benchmark result

## Development 

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 4.246 ± 0.323 | 3.708 | 4.679 | 1.00 |
| `pnpm wdev` | 34.772 ± 0.598 | 34.083 | 35.909 | 8.19 ± 0.64 |
| `pnpm pdev` | 47.273 ± 1.084 | 46.474 | 50.229 | 11.13 ± 0.89 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 5.958 ± 0.095 | 5.809 | 6.160 | 1.00 |
| `pnpm wdev` | 28.956 ± 0.776 | 27.839 | 30.249 | 4.86 ± 0.15 |
| `pnpm pdev` | 46.568 ± 1.305 | 43.840 | 47.859 | 7.82 ± 0.25 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 33.886 ± 0.406 | 33.473 | 34.611 | 1.00 |
| `pnpm wbuild` | 70.690 ± 0.716 | 69.362 | 71.962 | 2.09 ± 0.03 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 24.073 ± 1.452 | 22.959 | 28.068 | 1.00 |
| `pnpm wbuild` | 69.358 ± 2.776 | 66.751 | 75.287 | 2.88 ± 0.21 |

<!---benchEnd-->
	
	
	
	
	