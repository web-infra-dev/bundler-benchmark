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
| `pnpm rdev` | 1.938 ± 0.034 | 1.887 | 1.986 | 1.00 |
| `pnpm wdev` | 11.117 ± 0.039 | 11.032 | 11.163 | 5.74 ± 0.10 |
| `pnpm pdev` | 19.141 ± 0.183 | 18.964 | 19.444 | 9.88 ± 0.20 |


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
| `pnpm rbuild` | 4.049 ± 0.145 | 3.907 | 4.394 | 1.00 |
| `pnpm wbuild` | 16.479 ± 0.335 | 16.012 | 17.309 | 4.07 ± 0.17 |
| `pnpm pbuild` | 55.566 ± 0.809 | 53.820 | 56.692 | 13.72 ± 0.53 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 5.148 ± 0.075 | 5.049 | 5.277 | 1.00 |
| `pnpm wbuild` | 16.072 ± 0.636 | 15.571 | 17.221 | 3.12 ± 0.13 |
| `pnpm pbuild` | 61.501 ± 2.395 | 58.912 | 65.573 | 11.95 ± 0.50 |

<!---benchEnd-->
	
	
	
	
	
	