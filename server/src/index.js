import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema/index.js'
import resolvers from './resolvers/index.js'
import { readDB } from './dbController.js'




const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        db: {
            messages: readDB('messages'),
            users: readDB('users')
        }
    }
})

const app = express()
await server.start()
server.applyMiddleware({ 
    app, 
    path: '/graphql',
    cors: {
        origin: ['http://localhost:3000',
            'https://studio.apollographql.com'
        ],// 뒤에 슬래시 붙여서 하루종일 안됫엇음 ㅅㅂ
        credentials: true
    }
})

await app.listen(8000)
console.log('server listening  on 8000...')
