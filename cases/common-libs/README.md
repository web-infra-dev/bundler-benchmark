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
| `pnpm rdev` | 2.030 ± 0.066 | 1.951 | 2.136 | 1.00 |
| `pnpm wdev` | 10.985 ± 0.069 | 10.882 | 11.118 | 5.41 ± 0.18 |
| `pnpm pdev` | 45.776 ± 0.857 | 44.284 | 47.297 | 22.56 ± 0.85 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 1.865 ± 0.055 | 1.780 | 1.950 | 1.00 |
| `pnpm wdev` | 4.987 ± 0.115 | 4.838 | 5.214 | 2.67 ± 0.10 |
| `pnpm pdev` | 29.933 ± 1.249 | 28.552 | 32.562 | 16.05 ± 0.82 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 6.460 ± 0.172 | 6.292 | 6.833 | 1.00 |
| `pnpm wbuild` | 19.413 ± 0.149 | 19.162 | 19.624 | 3.01 ± 0.08 |
| `pnpm pbuild` | 56.650 ± 0.295 | 56.280 | 57.110 | 8.77 ± 0.24 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 3.326 ± 0.091 | 3.184 | 3.495 | 1.00 |
| `pnpm wbuild` | 8.540 ± 0.191 | 8.304 | 8.931 | 2.57 ± 0.09 |
| `pnpm pbuild` | 35.864 ± 0.855 | 34.387 | 37.203 | 10.78 ± 0.39 |

<!---benchEnd-->
	