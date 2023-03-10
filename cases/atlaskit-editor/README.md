# Get started
1. `pnpm i`
2. `pnpm run dev:bench` # run dev benchmark
3. `pnpm run build:bench` # run build benchmark











<!---benchStart-->
# Benchmark environment

## Linux
Intel(R) Xeon(R) Platinum 8260 CPU @ 2.40GHz 32Core, 64GB of RAM

# Benchmark result

## Development 

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 2.209 ± 0.057 | 2.135 | 2.289 | 1.00 |
| `webpack` | 11.903 ± 0.145 | 11.690 | 12.126 | 5.39 ± 0.15 |
| `parcel` | 14.205 ± 0.649 | 13.446 | 15.607 | 6.43 ± 0.34 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 6.912 ± 0.297 | 6.415 | 7.339 | 1.00 |
| `pnpm wbuild` | 23.159 ± 0.729 | 21.921 | 24.298 | 3.35 ± 0.18 |
| `pnpm pbuild` | 18.976 ± 0.448 | 18.633 | 20.116 | 2.75 ± 0.13 |


<!---benchEnd-->
	
	
	
	
	
	
	
	
	
	
	