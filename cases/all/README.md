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
Apple M1 Max 10 core, 32 GB of RAM

# Benchmark result

## Development 

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 4.246 ± 0.323 | 3.708 | 4.679 | 1.00 |
| `pnpm wdev` | 34.772 ± 0.598 | 34.083 | 35.909 | 8.19 ± 0.64 |
| `pnpm pdev` | 47.273 ± 1.084 | 46.474 | 50.229 | 11.13 ± 0.89 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 5.588 ± 0.371 | 5.162 | 6.200 | 1.00 |
| `pnpm wdev` | 18.736 ± 0.688 | 17.901 | 19.773 | 3.35 ± 0.25 |
| `pnpm pdev` | 31.438 ± 1.127 | 30.244 | 33.708 | 5.63 ± 0.42 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 33.886 ± 0.406 | 33.473 | 34.611 | 1.00 |
| `pnpm wbuild` | 70.690 ± 0.716 | 69.362 | 71.962 | 2.09 ± 0.03 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 15.377 ± 0.577 | 14.772 | 16.275 | 1.00 |
| `pnpm wbuild` | 32.304 ± 0.656 | 31.656 | 33.980 | 2.10 ± 0.09 |

<!---benchEnd-->
	
	
	