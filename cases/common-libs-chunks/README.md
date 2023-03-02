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
| `pnpm rdev` | 1.946 ± 0.037 | 1.870 | 1.994 | 1.00 |
| `pnpm wdev` | 10.977 ± 0.170 | 10.719 | 11.195 | 5.64 ± 0.14 |
| `pnpm pdev` | 18.056 ± 0.410 | 17.657 | 18.957 | 9.28 ± 0.28 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 1.920 ± 0.123 | 1.731 | 2.150 | 1.00 |
| `pnpm wdev` | 5.237 ± 0.247 | 5.042 | 5.889 | 2.73 ± 0.22 |
| `pnpm pdev` | 33.315 ± 0.880 | 32.015 | 34.780 | 17.35 ± 1.20 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 4.548 ± 0.066 | 4.467 | 4.682 | 1.00 |
| `pnpm wbuild` | 16.461 ± 0.209 | 15.993 | 16.715 | 3.62 ± 0.07 |
| `pnpm pbuild` | 56.398 ± 3.035 | 53.806 | 64.649 | 12.40 ± 0.69 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 2.783 ± 0.069 | 2.703 | 2.902 | 1.00 |
| `pnpm wbuild` | 8.108 ± 0.272 | 7.723 | 8.694 | 2.91 ± 0.12 |
| `pnpm pbuild` | 33.346 ± 1.112 | 31.867 | 35.571 | 11.98 ± 0.50 |

<!---benchEnd-->
	
	
	