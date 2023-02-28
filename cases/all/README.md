
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
| `pnpm rdev` | 3.814 ± 0.052 | 3.741 | 3.896 | 1.00 |
| `pnpm wdev` | 34.876 ± 0.676 | 34.185 | 36.152 | 9.14 ± 0.22 |
| `pnpm pdev` | 88.622 ± 1.051 | 86.907 | 89.884 | 23.24 ± 0.42 |


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
	