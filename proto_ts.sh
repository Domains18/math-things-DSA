#!/bin/bash

#setting the path to the protoc-gen-ts_proto plugin
PLUGIN_PATH = "node_modules/.bin/protoc-gen-ts_proto"

PROTO_FILE = "./proto/auth.proto"
OUTPUT_DIR = "./generated/auth"

# bash script to generate typescript code from proto files
protoc \
    --plugin="protoc-gen-ts_proto=${PLUGIN_PATH}" \
    --ts_proto_out="${OUTPUT_DIR}" \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true,useDate=true" \
    --proto_path="${PROTO_FILE}" \
    "${PROTO_FILE}"
# Path: proto_go.sh
