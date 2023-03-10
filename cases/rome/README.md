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
| `rspack` | 1.234 ± 0.017 | 1.212 | 1.271 | 1.00 |
| `webpack` | 4.857 ± 0.039 | 4.765 | 4.895 | 3.94 ± 0.06 |
| `parcel` | 5.997 ± 0.152 | 5.819 | 6.349 | 4.86 ± 0.14 |


## Production

### Linux 
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `rspack` | 2.607 ± 0.076 | 2.535 | 2.782 | 1.00 |
| `pnpm wbuild` | 11.934 ± 0.166 | 11.756 | 12.288 | 4.58 ± 0.15 |
| `pnpm pbuild` | 13.003 ± 0.272 | 12.804 | 13.726 | 4.99 ± 0.18 |


<!---benchEnd-->
	
	
	
	
	
	
	
	
	
	
	