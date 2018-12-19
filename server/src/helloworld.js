export function sayHello(call, callback) {
  console.log('call.request', call.request)
  callback(null, {
    users: [
      {
        name: 'hoge',
        age: 123,
        children: ['xxx', 'yyy', 'zzz'],
      },
    ],
  })
}
