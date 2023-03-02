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
| `pnpm rdev` | 1.532 ± 0.021 | 1.507 | 1.583 | 1.00 |
| `pnpm wdev` | 7.622 ± 0.301 | 7.334 | 8.202 | 4.98 ± 0.21 |
| `pnpm pdev` | 8.935 ± 0.245 | 8.624 | 9.313 | 5.83 ± 0.18 |


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
| `pnpm rbuild` | 8.103 ± 0.248 | 7.846 | 8.632 | 1.00 |
| `pnpm wbuild` | 21.921 ± 0.327 | 21.553 | 22.440 | 2.71 ± 0.09 |
| `pnpm pbuild` | 15.825 ± 0.189 | 15.617 | 16.123 | 1.95 ± 0.06 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 7.552 ± 0.164 | 7.310 | 7.863 | 1.00 |
| `pnpm wbuild` | 19.435 ± 0.534 | 18.760 | 20.196 | 2.57 ± 0.09 |
| `pnpm pbuild` | 15.525 ± 0.441 | 14.954 | 16.122 | 2.06 ± 0.07 |

<!---benchEnd-->
	
	
	
	
	