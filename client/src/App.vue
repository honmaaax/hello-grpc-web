<template>
  <div id="app">
    <form @submit.prevent="submit">
      <input type="text" v-model="text" />
      <input type="submit" value="送信せよ" />
    </form>
  </div>
</template>

<script>
import protobuf from 'protobufjs'
import moment from 'moment'
import { GreeterPromiseClient } from './grpc/helloworld_grpc_web_pb'
import { HelloRequest } from './grpc/helloworld_pb'

export default {
  name: 'App',
  data () {
    return {
      text: '',
    }
  },
  methods: {
    submit () {
      const { root } = protobuf.parse(`
        syntax = "proto3";

        package helloworld;

        service Greeter {
          rpc SayHello (HelloRequest) returns (HelloReply);
        }

        message HelloRequest {
          message User {
            string name = 1;
            int32 age = 2;
            repeated string children = 3;
          }
          repeated User users = 1;
        }

        message HelloReply {
          message User {
            string name = 1;
            int32 age = 2;
            repeated string children = 3;
          }
          repeated User users = 1;
        }
      `)
      const Req = root.lookupType('HelloRequest')
      const json = Req.create({users: [{name: 'puni', age: 999, children: ['uuu']}]})
      const message = Req.encode(json).finish()
      const req = HelloRequest.deserializeBinary(message)
      const greeter = new GreeterPromiseClient('http://localhost:8080')
      return greeter
        .sayHello(req, {deadline: moment().add(5, 'seconds').format('x')})
        .then((res)=>console.log(res.toObject()))
        .catch((err)=>console.error(err))
    },
  },
}
</script>

<style>
#app {

}
</style>
