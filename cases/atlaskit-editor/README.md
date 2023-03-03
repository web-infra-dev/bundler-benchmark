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
| `pnpm rdev` | 2.169 ± 0.050 | 2.121 | 2.274 | 1.00 |
| `pnpm wdev` | 11.875 ± 0.304 | 11.585 | 12.631 | 5.47 ± 0.19 |
| `pnpm pdev` | 12.442 ± 0.143 | 12.135 | 12.609 | 5.73 ± 0.15 |


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
| `pnpm rbuild` | 6.301 ± 0.060 | 6.234 | 6.438 | 1.00 |
| `pnpm wbuild` | 20.997 ± 0.320 | 20.599 | 21.609 | 3.33 ± 0.06 |
| `pnpm pbuild` | 18.483 ± 0.240 | 18.189 | 19.030 | 2.93 ± 0.05 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 7.084 ± 0.137 | 6.847 | 7.254 | 1.00 |
| `pnpm wbuild` | 20.356 ± 0.686 | 19.232 | 21.360 | 2.87 ± 0.11 |
| `pnpm pbuild` | 19.465 ± 0.372 | 18.987 | 20.009 | 2.75 ± 0.07 |

<!---benchEnd-->
	
	
	
	
	
	