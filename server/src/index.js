import express from 'express'
import messagesRoute from './routes/messages.js'
import usersRoute from './routes/users.js'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema/index.js'




const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        model: {
            messages: '',
            users: ''
        }
    }
})

const app = express()
await server.start()
server.applyMiddleware({ 
    app, 
    path: '/graphql',
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
})

await app.listen(8000)
console.log('server listening  on 8000...')
