# Get started
1. `pnpm i`
2. `pnpm bench:setup`
3. `pnpm run dev:bench` # run dev benchmark
4. `pnpm run build:bench` # run build benchmark











<!---benchStart-->
# Benchmark environment

## Linux
Intel(R) Xeon(R) Platinum 8260 CPU @ 2.40GHz 32Core, 64GB of RAM

# Benchmark result

## Development 

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 1.547 ± 0.037 | 1.505 | 1.617 | 1.00 |
| `webpack` | 7.429 ± 0.068 | 7.328 | 7.538 | 4.80 ± 0.12 |
| `parcel` | 8.963 ± 0.265 | 8.561 | 9.517 | 5.79 ± 0.22 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 7.742 ± 0.051 | 7.678 | 7.835 | 1.00 |
| `pnpm wbuild` | 22.077 ± 0.173 | 21.794 | 22.297 | 2.85 ± 0.03 |
| `pnpm pbuild` | 15.971 ± 0.250 | 15.656 | 16.285 | 2.06 ± 0.04 |


<!---benchEnd-->
	
	
	
	
	
	
	
	
	
	
	