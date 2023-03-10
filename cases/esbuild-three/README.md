# Get started
1. `pnpm i`
2. `pnpm bench:setup`
3. `pnpm run dev:bench` # run dev benchmark
4. `pnpm run build:bench` # run build benchmark








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
| `pnpm rdev` | 1.547 ± 0.037 | 1.505 | 1.617 | 1.00 |
| `pnpm wdev` | 7.429 ± 0.068 | 7.328 | 7.538 | 4.80 ± 0.12 |
| `pnpm pdev` | 8.963 ± 0.265 | 8.561 | 9.517 | 5.79 ± 0.22 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 2.328 ± 0.158 | 2.097 | 2.516 | 1.00 |
| `pnpm wdev` | 7.423 ± 1.043 | 7.002 | 10.369 | 3.19 ± 0.50 |
| `pnpm pdev` | 10.102 ± 0.391 | 9.684 | 10.640 | 4.34 ± 0.34 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 7.742 ± 0.051 | 7.678 | 7.835 | 1.00 |
| `pnpm wbuild` | 22.077 ± 0.173 | 21.794 | 22.297 | 2.85 ± 0.03 |
| `pnpm pbuild` | 15.971 ± 0.250 | 15.656 | 16.285 | 2.06 ± 0.04 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 7.552 ± 0.164 | 7.310 | 7.863 | 1.00 |
| `pnpm wbuild` | 19.435 ± 0.534 | 18.760 | 20.196 | 2.57 ± 0.09 |
| `pnpm pbuild` | 15.525 ± 0.441 | 14.954 | 16.122 | 2.06 ± 0.07 |

<!---benchEnd-->
	
	
	
	
	
	
	
	