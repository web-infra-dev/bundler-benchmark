#!/usr/bin/env bash


# This script runs all the benchmarks in the benchmarks directory.

#all
platform=$1

if [ -z "$platform" ]; then
  echo "You should provide your platform"
  exit 1
else
  echo "platform: $platform"
fi

export BENCHMARK_PLATFORM=$platform
pnpm i -r

cd cases/all 
echo "all" 
pnpm bench:setup
pnpm patch:rome 
pnpm run dev:bench
pnpm run build:bench
cd .. 

cd atlaskit-editor
echo "atlaskit-editor" 
pnpm run dev:bench
pnpm run build:bench
cd .. 

cd common-libs
echo "common-libs"
pnpm run dev:bench
pnpm run build:bench
cd ..

cd common-libs-chunks
echo "common-libs-chunks"
pnpm run dev:bench
pnpm run build:bench
cd ..

cd esbuild-three
echo "esbuild-three"
pnpm bench:setup
pnpm run dev:bench
pnpm run build:bench
cd ..

cd rc-1000
echo "rc-1000"
pnpm run dev:bench
pnpm run build:bench
cd ..

cd rc-10000-hmr
echo "rc-10000-hmr"
pnpm run dev:bench
pnpm run build:bench
cd ..

cd rome
echo "rome"
pnpm bench:setup
pnpm patch:rome 
pnpm run dev:bench
pnpm run build:bench
cd ..
