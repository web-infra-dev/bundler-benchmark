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
| `pnpm rdev` | 1.268 ± 0.043 | 1.227 | 1.351 | 1.00 |
| `pnpm wdev` | 4.677 ± 0.072 | 4.590 | 4.833 | 3.69 ± 0.14 |
| `pnpm pdev` | 5.838 ± 0.103 | 5.689 | 5.996 | 4.60 ± 0.18 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 1.362 ± 0.023 | 1.328 | 1.413 | 1.00 |
| `pnpm wdev` | 4.548 ± 0.267 | 4.219 | 5.195 | 3.34 ± 0.20 |
| `pnpm pdev` | 5.994 ± 0.193 | 5.818 | 6.453 | 4.40 ± 0.16 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 2.680 ± 0.091 | 2.591 | 2.843 | 1.00 |
| `pnpm wbuild` | 8.994 ± 0.079 | 8.834 | 9.098 | 3.36 ± 0.12 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 2.433 ± 0.051 | 2.308 | 2.485 | 1.00 |
| `pnpm wbuild` | 10.703 ± 0.244 | 10.415 | 11.050 | 4.40 ± 0.14 |
| `pnpm pbuild` | 11.730 ± 0.181 | 11.398 | 11.934 | 4.82 ± 0.13 |

<!---benchEnd-->
	
	
	
	
	