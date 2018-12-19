import * as protoLoader from '@grpc/proto-loader'
import grpc from 'grpc'

import { sayHello } from './src/helloworld'

const PORT = 9090

protoLoader.load(`./dist/proto/helloworld.proto`)
  .then((packageDefinition)=>{
    const helloworld = grpc.loadPackageDefinition(packageDefinition).helloworld
    const server = new grpc.Server()
    server.addService(helloworld.Greeter.service, {sayHello})
    server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure())
    server.start()
    console.info(`GRPC Server Started as http://localhost:${PORT}`)
  })
  .catch((err)=>{
    console.error(err)
  })
