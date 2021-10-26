import { v4 } from 'uuid'
import { writeDB } from '../dbController.js'

const setMsgs = data => writeDB('messages', data)

/*
parent(obj): parent 객체, 거의 사용X
args: Query에 필요한 필드에 제공되는 인수(parameter)
context: 로그인한 사용자. DB Access 등의 중요한 정보들
*/
const messagesResolver = {
    Query : {
        messages: (parent, args, { db }) => {
            
            return db.messages
        },
        message: (parent,{ id = ''}, {db} ) => {
            return db.messages.find(msg => msg.id === id)
        }
    },
    Mutation: {
        createMessage: (parent, {text, userId}, {db}) => {
            const newMsg = {
                id: v4(),
                text: body.text,
                userId: body.userId,
                timeStamp: Date.now()
            }
            db.messages.unshift(newMsg)
            setMsgs(db.message)
            return newMsg
        },
        updateMessage: (parent, { id, text, userId }, {db}) => {

                const targetIndex = db.messages.findIndex(msg => msg.id === id)
                if ( targetIndex < 0 ) throw Error('메시지가 없습니다.')
                if ( db.messages[targetIndex].userId !== userId) throw Error('사용자가 다릅니다.')

                const newMsg = { ...db.message[targetIndex], text }
                db.message.splice(targetIndex, 1, newMsg)
                setMsgs(db.message)
                return newMsg
        },
        deleteMessage: (parent, {id, userId}, {db}) => {
            const targetIndex = db.messages.findIndex(msg => msg.id === id)
                if ( targetIndex < 0 ) throw Error('메시지가 없습니다.')
                if ( db.messages[targetIndex].userId !== userId) Error('사용자가 다릅니다.')

                db.messages.splice(targetIndex, 1)
                setMsgs(msgs)
                return(id)
        },
    }
}

export default messagesResolver