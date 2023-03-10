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
| `pnpm rdev` | 2.209 ± 0.057 | 2.135 | 2.289 | 1.00 |
| `pnpm wdev` | 11.903 ± 0.145 | 11.690 | 12.126 | 5.39 ± 0.15 |
| `parcel` | 14.205 ± 0.649 | 13.446 | 15.607 | 6.43 ± 0.34 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 3.128 ± 0.096 | 2.955 | 3.280 | 1.00 |
| `pnpm wdev` | 11.014 ± 0.682 | 10.181 | 11.969 | 3.52 ± 0.24 |
| `parcel` | 15.075 ± 0.214 | 14.608 | 15.352 | 4.82 ± 0.16 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 6.912 ± 0.297 | 6.415 | 7.339 | 1.00 |
| `pnpm wbuild` | 23.159 ± 0.729 | 21.921 | 24.298 | 3.35 ± 0.18 |
| `pnpm pbuild` | 18.976 ± 0.448 | 18.633 | 20.116 | 2.75 ± 0.13 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 7.084 ± 0.137 | 6.847 | 7.254 | 1.00 |
| `pnpm wbuild` | 20.356 ± 0.686 | 19.232 | 21.360 | 2.87 ± 0.11 |
| `pnpm pbuild` | 19.465 ± 0.372 | 18.987 | 20.009 | 2.75 ± 0.07 |

<!---benchEnd-->
	
	
	
	
	
	
	
	