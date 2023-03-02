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
| `pnpm rdev` | 2.263 ± 0.034 | 2.210 | 2.332 | 1.00 |
| `pnpm wdev` | 11.840 ± 0.387 | 11.433 | 12.880 | 5.23 ± 0.19 |
| `pnpm pdev` | 11.318 ± 0.162 | 11.134 | 11.584 | 5.00 ± 0.10 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 3.128 ± 0.096 | 2.955 | 3.280 | 1.00 |
| `pnpm wdev` | 11.014 ± 0.682 | 10.181 | 11.969 | 3.52 ± 0.24 |
| `pnpm pdev` | 15.075 ± 0.214 | 14.608 | 15.352 | 4.82 ± 0.16 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 6.235 ± 0.081 | 6.092 | 6.397 | 1.00 |
| `pnpm wbuild` | 20.671 ± 0.268 | 20.356 | 21.131 | 3.32 ± 0.06 |
| `pnpm pbuild` | 17.121 ± 0.257 | 16.728 | 17.513 | 2.75 ± 0.05 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 7.084 ± 0.137 | 6.847 | 7.254 | 1.00 |
| `pnpm wbuild` | 20.356 ± 0.686 | 19.232 | 21.360 | 2.87 ± 0.11 |
| `pnpm pbuild` | 19.465 ± 0.372 | 18.987 | 20.009 | 2.75 ± 0.07 |

<!---benchEnd-->
	
	
	
	
	