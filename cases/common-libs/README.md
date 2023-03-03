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
| `pnpm rdev` | 1.936 ± 0.086 | 1.888 | 2.176 | 1.00 |
| `pnpm wdev` | 10.930 ± 0.066 | 10.796 | 11.012 | 5.65 ± 0.25 |
| `pnpm pdev` | 17.016 ± 0.150 | 16.797 | 17.237 | 8.79 ± 0.40 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 2.824 ± 0.230 | 2.563 | 3.305 | 1.00 |
| `pnpm wdev` | 9.950 ± 0.347 | 9.462 | 10.522 | 3.52 ± 0.31 |
| `pnpm pdev` | 18.946 ± 0.575 | 18.134 | 19.555 | 6.71 ± 0.58 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 6.332 ± 0.137 | 6.186 | 6.601 | 1.00 |
| `pnpm wbuild` | 19.263 ± 0.132 | 19.099 | 19.514 | 3.04 ± 0.07 |
| `pnpm pbuild` | 57.506 ± 0.663 | 56.406 | 58.656 | 9.08 ± 0.22 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 6.309 ± 0.360 | 5.797 | 6.783 | 1.00 |
| `pnpm wbuild` | 16.865 ± 0.257 | 16.422 | 17.226 | 2.67 ± 0.16 |
| `pnpm pbuild` | 58.846 ± 0.892 | 57.811 | 60.507 | 9.33 ± 0.55 |

<!---benchEnd-->
	
	
	
	
	
	