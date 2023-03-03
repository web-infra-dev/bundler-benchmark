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
| `pnpm rdev` | 1.247 ± 0.011 | 1.226 | 1.259 | 1.00 |
| `pnpm wdev` | 4.997 ± 0.210 | 4.862 | 5.583 | 4.01 ± 0.17 |
| `pnpm pdev` | 5.984 ± 0.119 | 5.811 | 6.248 | 4.80 ± 0.10 |


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
| `pnpm rbuild` | 2.665 ± 0.087 | 2.590 | 2.839 | 1.00 |
| `pnpm wbuild` | 11.909 ± 0.099 | 11.783 | 12.077 | 4.47 ± 0.15 |
| `pnpm pbuild` | 13.095 ± 0.239 | 12.860 | 13.537 | 4.91 ± 0.18 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 2.433 ± 0.051 | 2.308 | 2.485 | 1.00 |
| `pnpm wbuild` | 10.703 ± 0.244 | 10.415 | 11.050 | 4.40 ± 0.14 |
| `pnpm pbuild` | 11.730 ± 0.181 | 11.398 | 11.934 | 4.82 ± 0.13 |

<!---benchEnd-->
	
	
	
	
	
	