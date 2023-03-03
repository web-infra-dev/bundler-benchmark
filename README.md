This repository is based on https://github.com/webpack/benchmark

# Usage
`./scripts/bench-all.sh ${platform}`

**examples**
```bash
./scripts/bench-all.sh linux
```

If you only want run specific benchmark in some case, make sure you export `BENCHMARK_PLATFORM` variable

**example**
```bash
export BENCHMARK_PLATFORM=mac
```