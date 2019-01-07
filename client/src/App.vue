<template>
  <div id="app">
    <form @submit.prevent="submit">
      <input type="text" v-model="text" />
      <input type="submit" value="送信せよ" />
    </form>
  </div>
</template>

<script>
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
      const req = new HelloRequest()
      const users = [0].map(()=>{
        const r = new HelloRequest.User()
        r.setName('puyo')
        r.setAge(999)
        r.setChildrenList(['uuu'])
        return r
      })
      req.setUsersList(users)
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
