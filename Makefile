NPM_DIRECTORY=packages/npm/messages

build_js:
	pbjs -t static-module -w commonjs -o ${NPM_DIRECTORY}/index.js proto/entry.proto proto/error.proto proto/insights.proto
	pbts -o ${NPM_DIRECTORY}/index.d.ts ${NPM_DIRECTORY}/index.js

build_go:
	protoc -I=proto --go_out=./packages/go ./proto/entry.proto ./proto/error.proto ./proto/insights.proto

build: build_go build_js
