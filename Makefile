NPM_DIRECTORY=packages/npm/messages
SRC=proto/entry.proto \
		proto/insights.proto \
		proto/notebook/notebook.proto \
		proto/notebook/status.proto \
		proto/code/code.proto \
		# proto/status/status.proto
# SRC=proto/entry.proto \
# 		proto/error.proto \
# 		proto/insights.proto \
# 		proto/notebook.proto \
# 		proto/status.proto \
# 		proto/code.proto

build_js:
	docker run -v $(shell pwd):/workdir --rm jasonblanchard/pbjs pbjs -t static-module -w commonjs -o ${NPM_DIRECTORY}/index.js ${SRC}
	docker run -v $(shell pwd):/workdir --rm jasonblanchard/pbjs pbts -o ${NPM_DIRECTORY}/index.d.ts ${NPM_DIRECTORY}/index.js ${SRC}

build_go:
	protoc -I=proto --go_opt=paths=source_relative --go_out=./packages/go/messages --go-grpc_opt=paths=source_relative --go-grpc_out=./packages/go/messages ${SRC}

build: build_go build_js
