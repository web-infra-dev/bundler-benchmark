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
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 1.569 ± 0.047 | 1.513 | 1.654 | 1.00 |
| `pnpm wdev` | 7.508 ± 0.067 | 7.427 | 7.641 | 4.79 ± 0.15 |
| `pnpm pdev` | 8.748 ± 0.124 | 8.645 | 9.069 | 5.58 ± 0.18 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 1.296 ± 0.056 | 1.219 | 1.381 | 1.00 |
| `pnpm wdev` | 3.475 ± 0.192 | 3.286 | 3.938 | 2.68 ± 0.19 |
| `pnpm pdev` | 5.395 ± 0.319 | 5.021 | 6.055 | 4.16 ± 0.31 |


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
| `pnpm rbuild` | 3.505 ± 0.087 | 3.402 | 3.659 | 1.00 |
| `pnpm wbuild` | 9.663 ± 0.305 | 9.196 | 10.225 | 2.76 ± 0.11 |
| `pnpm pbuild` | 8.283 ± 0.742 | 7.729 | 10.226 | 2.36 ± 0.22 |

<!---benchEnd-->
	