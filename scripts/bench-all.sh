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

# pnpm i -r
export BENCHMARK_PLATFORM=$platform

cd cases/all \
&& ls \
&& cd .. \
 echo "................." 
&& cd atlaskit-editor \
&& ls  \
&& cd .. \