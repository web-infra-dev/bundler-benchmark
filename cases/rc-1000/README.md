# Get started
1. `pnpm i`
2. `pnpm run dev:bench` # run dev benchmark
3. `pnpm run build:bench` # run build benchmark

<!---benchStart-->
# Benchmark environment
## Linux
Intel(R) Xeon(R) Platinum 8260 CPU @ 2.40GHz 32Core, 64GB of RAM
## Mac
Apple M1 Max 10 core, 32 GB of RAM

# Benchmark result

## Development 

### Linux 


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 1.288 ± 0.083 | 1.161 | 1.436 | 1.00 |
| `pnpm wdev` | 3.161 ± 0.171 | 2.962 | 3.456 | 2.45 ± 0.21 |
| `pnpm pdev` | 4.784 ± 0.471 | 4.331 | 5.955 | 3.71 ± 0.44 |


## Production

### Linux 


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 2.852 ± 0.265 | 2.397 | 3.238 | 1.00 |
| `pnpm wbuild` | 8.519 ± 0.611 | 7.685 | 9.694 | 2.99 ± 0.35 |
| `pnpm pbuild` | 51.480 ± 1.527 | 49.298 | 53.169 | 18.05 ± 1.76 |

<!---benchEnd-->
	
	
	