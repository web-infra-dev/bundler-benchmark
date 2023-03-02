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
| `pnpm rdev` | 1.969 ± 0.033 | 1.928 | 2.026 | 1.00 |
| `pnpm wdev` | 11.028 ± 0.115 | 10.873 | 11.204 | 5.60 ± 0.11 |
| `pnpm pdev` | 16.429 ± 0.200 | 16.137 | 16.775 | 8.34 ± 0.17 |


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
| `pnpm rbuild` | 6.460 ± 0.172 | 6.292 | 6.833 | 1.00 |
| `pnpm wbuild` | 19.413 ± 0.149 | 19.162 | 19.624 | 3.01 ± 0.08 |
| `pnpm pbuild` | 56.650 ± 0.295 | 56.280 | 57.110 | 8.77 ± 0.24 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 6.309 ± 0.360 | 5.797 | 6.783 | 1.00 |
| `pnpm wbuild` | 16.865 ± 0.257 | 16.422 | 17.226 | 2.67 ± 0.16 |
| `pnpm pbuild` | 58.846 ± 0.892 | 57.811 | 60.507 | 9.33 ± 0.55 |

<!---benchEnd-->
	
	
	
	
	