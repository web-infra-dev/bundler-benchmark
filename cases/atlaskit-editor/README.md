
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
| `pnpm rdev` | 2.318 ± 0.034 | 2.272 | 2.374 | 1.00 |
| `pnpm wdev` | 11.788 ± 0.166 | 11.560 | 12.047 | 5.09 ± 0.10 |
| `pnpm pdev` | 13.038 ± 0.138 | 12.863 | 13.255 | 5.62 ± 0.10 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rdev` | 1.743 ± 0.120 | 1.619 | 2.029 | 1.00 |
| `pnpm wdev` | 5.458 ± 0.129 | 5.260 | 5.731 | 3.13 ± 0.23 |
| `pnpm pdev` | 8.975 ± 0.537 | 8.160 | 9.898 | 5.15 ± 0.47 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 6.235 ± 0.081 | 6.092 | 6.397 | 1.00 |
| `pnpm wbuild` | 20.671 ± 0.268 | 20.356 | 21.131 | 3.32 ± 0.06 |
| `pnpm pbuild` | 17.121 ± 0.257 | 16.728 | 17.513 | 2.75 ± 0.05 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm rbuild` | 3.645 ± 0.582 | 3.197 | 4.860 | 1.00 |
| `pnpm wbuild` | 9.366 ± 0.214 | 9.030 | 9.722 | 2.57 ± 0.41 |
| `pnpm pbuild` | 10.900 ± 0.651 | 10.327 | 12.110 | 2.99 ± 0.51 |

<!---benchEnd-->
	