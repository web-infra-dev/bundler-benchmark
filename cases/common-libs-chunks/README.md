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
| `pnpm rdev` | 1.946 ± 0.037 | 1.870 | 1.994 | 1.00 |
| `pnpm wdev` | 10.977 ± 0.170 | 10.719 | 11.195 | 5.64 ± 0.14 |
| `pnpm pdev` | 18.056 ± 0.410 | 17.657 | 18.957 | 9.28 ± 0.28 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 3.764 ± 0.183 | 3.500 | 4.076 | 1.00 |
| `pnpm wdev` | 10.493 ± 0.825 | 9.914 | 12.573 | 2.79 ± 0.26 |
| `pnpm pdev` | 21.725 ± 1.554 | 20.694 | 25.937 | 5.77 ± 0.50 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 4.548 ± 0.066 | 4.467 | 4.682 | 1.00 |
| `pnpm wbuild` | 16.461 ± 0.209 | 15.993 | 16.715 | 3.62 ± 0.07 |
| `pnpm pbuild` | 56.398 ± 3.035 | 53.806 | 64.649 | 12.40 ± 0.69 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 5.148 ± 0.075 | 5.049 | 5.277 | 1.00 |
| `pnpm wbuild` | 16.072 ± 0.636 | 15.571 | 17.221 | 3.12 ± 0.13 |
| `pnpm pbuild` | 61.501 ± 2.395 | 58.912 | 65.573 | 11.95 ± 0.50 |

<!---benchEnd-->
	
	
	
	
	