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
| `pnpm rdev` | 1.937 ± 0.027 | 1.889 | 1.985 | 1.00 |
| `pnpm wdev` | 11.052 ± 0.167 | 10.858 | 11.444 | 5.71 ± 0.12 |
| `parcel` | 17.359 ± 0.245 | 16.867 | 17.667 | 8.96 ± 0.18 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 2.824 ± 0.230 | 2.563 | 3.305 | 1.00 |
| `pnpm wdev` | 9.950 ± 0.347 | 9.462 | 10.522 | 3.52 ± 0.31 |
| `parcel` | 18.946 ± 0.575 | 18.134 | 19.555 | 6.71 ± 0.58 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 6.333 ± 0.066 | 6.251 | 6.461 | 1.00 |
| `pnpm wbuild` | 19.344 ± 0.216 | 18.998 | 19.628 | 3.05 ± 0.05 |
| `pnpm pbuild` | 58.360 ± 1.434 | 56.965 | 61.750 | 9.21 ± 0.25 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 6.309 ± 0.360 | 5.797 | 6.783 | 1.00 |
| `pnpm wbuild` | 16.865 ± 0.257 | 16.422 | 17.226 | 2.67 ± 0.16 |
| `pnpm pbuild` | 58.846 ± 0.892 | 57.811 | 60.507 | 9.33 ± 0.55 |

<!---benchEnd-->
	
	
	
	
	
	
	
	