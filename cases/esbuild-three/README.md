# Get started
1. `pnpm i`
2. `pnpm bench:setup`
3. `pnpm run dev:bench` # run dev benchmark
4. `pnpm run build:bench` # run build benchmark






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
| `pnpm rdev` | 1.542 ± 0.028 | 1.521 | 1.613 | 1.00 |
| `pnpm wdev` | 7.464 ± 0.080 | 7.341 | 7.581 | 4.84 ± 0.10 |
| `pnpm pdev` | 8.712 ± 0.207 | 8.515 | 9.191 | 5.65 ± 0.17 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 2.328 ± 0.158 | 2.097 | 2.516 | 1.00 |
| `pnpm wdev` | 7.423 ± 1.043 | 7.002 | 10.369 | 3.19 ± 0.50 |
| `pnpm pdev` | 10.102 ± 0.391 | 9.684 | 10.640 | 4.34 ± 0.34 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 7.834 ± 0.078 | 7.762 | 8.005 | 1.00 |
| `pnpm wbuild` | 22.545 ± 0.425 | 21.910 | 23.243 | 2.88 ± 0.06 |
| `pnpm pbuild` | 16.004 ± 0.391 | 15.475 | 16.568 | 2.04 ± 0.05 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 7.552 ± 0.164 | 7.310 | 7.863 | 1.00 |
| `pnpm wbuild` | 19.435 ± 0.534 | 18.760 | 20.196 | 2.57 ± 0.09 |
| `pnpm pbuild` | 15.525 ± 0.441 | 14.954 | 16.122 | 2.06 ± 0.07 |

<!---benchEnd-->
	
	
	
	
	
	