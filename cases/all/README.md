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
| `pnpm rdev` | 3.986 ± 0.094 | 3.860 | 4.173 | 1.00 |
| `pnpm wdev` | 36.675 ± 0.561 | 36.207 | 38.078 | 9.20 ± 0.26 |
| `pnpm pdev` | 52.092 ± 1.480 | 50.345 | 55.485 | 13.07 ± 0.48 |


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
| `pnpm rbuild` | 22.349 ± 0.132 | 22.143 | 22.541 | 1.00 |
| `pnpm wbuild` | 74.729 ± 1.299 | 73.271 | 76.650 | 3.34 ± 0.06 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 24.073 ± 1.452 | 22.959 | 28.068 | 1.00 |
| `pnpm wbuild` | 69.358 ± 2.776 | 66.751 | 75.287 | 2.88 ± 0.21 |

<!---benchEnd-->
	
	
	
	
	
	