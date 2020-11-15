NPM_DIRECTORY=packages/npm/messages
SRC=proto/entry.proto \
		proto/error.proto \
		proto/insights.proto \
		proto/notebook.proto \
		proto/status.proto \
		proto/code.proto

build_js:
	pbjs -t static-module -w commonjs -o ${NPM_DIRECTORY}/index.js ${SRC}
	pbts -o ${NPM_DIRECTORY}/index.d.ts ${NPM_DIRECTORY}/index.js

build_go:
	protoc -I=proto --go_out=./packages/go ${SRC}

build: build_go build_js
