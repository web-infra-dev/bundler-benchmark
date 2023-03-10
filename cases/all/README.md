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
MacBookPro 2.6 GHz 6-Core Intel Core i7, 16GB of RAM

# Benchmark result

## Development 

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 3.792 ± 0.185 | 3.649 | 4.296 | 1.00 |
| `webpack` | 42.611 ± 0.671 | 42.158 | 44.442 | 11.24 ± 0.58 |
| `webpack(with swc)` | 31.252 ± 0.909 | 30.092 | 32.670 | 8.24 ± 0.47 |
| `parcel` | 51.071 ± 1.147 | 50.032 | 54.118 | 13.47 ± 0.72 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 6.181 ± 0.307 | 5.759 | 6.726 | 1.00 |
| `webpack` | 38.353 ± 1.514 | 36.695 | 41.792 | 6.21 ± 0.39 |
| `webpack(with swc)` | 27.689 ± 0.798 | 26.764 | 28.976 | 4.48 ± 0.26 |
| `parcel` | 47.780 ± 1.088 | 45.431 | 49.346 | 7.73 ± 0.42 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 22.353 ± 0.166 | 22.088 | 22.712 | 1.00 |
| `webpack(with swc)` | 75.054 ± 0.565 | 74.341 | 75.842 | 3.36 ± 0.04 |
| `pnpm wbuild` | 160.059 ± 2.504 | 155.937 | 163.412 | 7.16 ± 0.12 |


### Mac
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 20.202 ± 0.273 | 19.835 | 20.806 | 1.00 |
| `webpack(with swc)` | 58.489 ± 1.309 | 57.053 | 61.632 | 2.90 ± 0.08 |
| `pnpm wbuild` | 120.839 ± 1.403 | 118.186 | 123.117 | 5.98 ± 0.11 |

<!---benchEnd-->
	
	
	
	
	
	
	
	