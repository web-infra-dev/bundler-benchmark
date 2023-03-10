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
| `rspack` | 1.937 ± 0.027 | 1.889 | 1.985 | 1.00 |
| `webpack` | 11.052 ± 0.167 | 10.858 | 11.444 | 5.71 ± 0.12 |
| `parcel` | 17.359 ± 0.245 | 16.867 | 17.667 | 8.96 ± 0.18 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 6.333 ± 0.066 | 6.251 | 6.461 | 1.00 |
| `pnpm wbuild` | 19.344 ± 0.216 | 18.998 | 19.628 | 3.05 ± 0.05 |
| `pnpm pbuild` | 58.360 ± 1.434 | 56.965 | 61.750 | 9.21 ± 0.25 |


<!---benchEnd-->
	
	
	
	
	
	
	
	
	
	
	