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
| `rspack` | 1.911 ± 0.045 | 1.860 | 2.005 | 1.00 |
| `webpack` | 11.184 ± 0.193 | 10.853 | 11.363 | 5.85 ± 0.17 |
| `parcel` | 19.094 ± 0.182 | 18.868 | 19.394 | 9.99 ± 0.25 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 4.002 ± 0.145 | 3.855 | 4.384 | 1.00 |
| `pnpm wbuild` | 16.390 ± 0.229 | 16.155 | 16.882 | 4.10 ± 0.16 |
| `pnpm pbuild` | 55.907 ± 0.691 | 54.403 | 56.978 | 13.97 ± 0.54 |


<!---benchEnd-->
	
	
	
	
	
	
	
	
	
	
	