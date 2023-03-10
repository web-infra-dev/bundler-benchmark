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
| `rspack` | 1.399 ± 0.024 | 1.352 | 1.434 | 1.00 |
| `webpack` | 5.398 ± 0.065 | 5.319 | 5.513 | 3.86 ± 0.08 |
| `parcel` | 7.592 ± 0.076 | 7.494 | 7.701 | 5.43 ± 0.11 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 4.690 ± 0.047 | 4.631 | 4.754 | 1.00 |
| `pnpm wbuild` | 15.656 ± 0.296 | 15.318 | 16.050 | 3.34 ± 0.07 |
| `pnpm pbuild` | 72.585 ± 0.894 | 71.149 | 73.524 | 15.48 ± 0.25 |


<!---benchEnd-->
	
	
	
	
	
	
	
	
	
	
	
	
	