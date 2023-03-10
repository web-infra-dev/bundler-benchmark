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
| `pnpm rdev` | 1.911 ± 0.045 | 1.860 | 2.005 | 1.00 |
| `pnpm wdev` | 11.184 ± 0.193 | 10.853 | 11.363 | 5.85 ± 0.17 |
| `pnpm pdev` | 19.094 ± 0.182 | 18.868 | 19.394 | 9.99 ± 0.25 |


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
| `rspack` | 4.002 ± 0.145 | 3.855 | 4.384 | 1.00 |
| `pnpm wbuild` | 16.390 ± 0.229 | 16.155 | 16.882 | 4.10 ± 0.16 |
| `pnpm pbuild` | 55.907 ± 0.691 | 54.403 | 56.978 | 13.97 ± 0.54 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 5.148 ± 0.075 | 5.049 | 5.277 | 1.00 |
| `pnpm wbuild` | 16.072 ± 0.636 | 15.571 | 17.221 | 3.12 ± 0.13 |
| `pnpm pbuild` | 61.501 ± 2.395 | 58.912 | 65.573 | 11.95 ± 0.50 |

<!---benchEnd-->
	
	
	
	
	
	
	
	