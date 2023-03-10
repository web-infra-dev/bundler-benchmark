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
| `pnpm rdev` | 1.234 ± 0.017 | 1.212 | 1.271 | 1.00 |
| `pnpm wdev` | 4.857 ± 0.039 | 4.765 | 4.895 | 3.94 ± 0.06 |
| `pnpm pdev` | 5.997 ± 0.152 | 5.819 | 6.349 | 4.86 ± 0.14 |


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
| `rspack` | 2.607 ± 0.076 | 2.535 | 2.782 | 1.00 |
| `pnpm wbuild` | 11.934 ± 0.166 | 11.756 | 12.288 | 4.58 ± 0.15 |
| `pnpm pbuild` | 13.003 ± 0.272 | 12.804 | 13.726 | 4.99 ± 0.18 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 2.433 ± 0.051 | 2.308 | 2.485 | 1.00 |
| `pnpm wbuild` | 10.703 ± 0.244 | 10.415 | 11.050 | 4.40 ± 0.14 |
| `pnpm pbuild` | 11.730 ± 0.181 | 11.398 | 11.934 | 4.82 ± 0.13 |

<!---benchEnd-->
	
	
	
	
	
	
	
	