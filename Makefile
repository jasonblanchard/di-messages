NPM_DIRECTORY=packages/npm/messages

build_js:
	pbjs -t static-module -w commonjs -o ${NPM_DIRECTORY}/index.js proto/entry.proto proto/error.proto
	pbts -o ${NPM_DIRECTORY}/index.d.ts ${NPM_DIRECTORY}/index.js

build: build_js
