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

# Benchmark result

## Development 

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 3.792 ± 0.185 | 3.649 | 4.296 | 1.00 |
| `webpack` | 42.611 ± 0.671 | 42.158 | 44.442 | 11.24 ± 0.58 |
| `webpack(with swc)` | 31.252 ± 0.909 | 30.092 | 32.670 | 8.24 ± 0.47 |
| `parcel` | 51.071 ± 1.147 | 50.032 | 54.118 | 13.47 ± 0.72 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 22.353 ± 0.166 | 22.088 | 22.712 | 1.00 |
| `webpack(with swc)` | 75.054 ± 0.565 | 74.341 | 75.842 | 3.36 ± 0.04 |
| `pnpm wbuild` | 160.059 ± 2.504 | 155.937 | 163.412 | 7.16 ± 0.12 |


<!---benchEnd-->
	
	
	
	
	
	
	
	
	
	
	