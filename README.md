# hello-grpc-web

DockerでgRPC-Web(Vue.js)で試すための環境です。

## 使い方

```sh
$ git clone https://github.com/otanu/hello-grpc-web.git
$ cd hello-grpc-web
$ docker-compose up -d server proxy client
```

http://localhost:3000
にアクセスするとサンプルが動きます。

## コンテナの構成

- client
  - Vue.js
  - JavaScript
  - gRPC-Web
- proxy
  - Envoy
- server
  - Node.js

## Mac でのプロトコル定義ファイルのコンパイルの例

### Protocol Buffers コンパイラのインストール

```bash
$ brew install protobuf
$ protoc --version
libprotoc 3.6.1
```

#### gRPC-Web 用プラグインのインストール

```sh
$ cd /tmp
$ git clone https://github.com/grpc/grpc-web
$ cd grpc-web/
$ make install-plugin
```

#### go 用プラグイン

```sh
$ go get -u google.golang.org/grpc
$ go get -u github.com/golang/protobuf/protoc-gen-go
$ export PATH=$PATH:$GOPATH/bin
```

#### プロトコル定義ファイルのコンパイル

```sh:gen.sh
./gen.sh
```
