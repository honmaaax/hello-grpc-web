<template>
  <div id="app">
    <form @submit.prevent="submit">
      <input type="text" v-model="text" />
      <input type="submit" value="送信せよ" />
    </form>
  </div>
</template>

<script>
import { sayHello } from './grpc/bundle'

export default {
  name: 'App',
  data () {
    return {
      text: '',
    }
  },
  methods: {
    submit () {
      return sayHello({
        users: [
          {
            name: 'puyopuyo',
            age: 999999,
            children: ['uuuuuu'],
          },
        ],
      })
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
