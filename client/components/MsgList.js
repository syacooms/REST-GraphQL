import MsgItem from './MsgItem';
import MsgInput from './MsgInput';
import { useState } from 'react';


const UserIds = ['roy','jay']
const getRandomUserId = () => UserIds[Math.round(Math.random())]

const originalMsgs = Array(50).fill(0).map((_, i) => ({
    id: i + 1,
    userId: getRandomUserId(),
    timestamp: 123456789 + i * 1000 * 60,
    text: `${i + 1} mock text`
}))

console.log(JSON.stringify(originalMsgs));

// [
//     {
//         id: 1,
//         userId: getRandomUserId(),
//         timestamp: 123455679123,
//         text: '1 mock text'
//     },
// ]

const MsgList = () => {
    const [msgs, setMsgs] = useState(originalMsgs)
    const [editingId, setEditingId] = useState(null)

    const onCreate = text => {
        const newMsg = {
            id: msgs.length,
            userId: getRandomUserId(),
            timestamp: Date.now(),
            text: `${msgs.length + 1} ${text}`
        }
        setMsgs(msgs => ([newMsg, ...msgs]))
        //console.log(msgs);
    }

    const onUpdate = (text, id) => {
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === id)
            if (targetIndex < 0) return msgs;
            const newMsgs = [...msgs]
            newMsgs.splice(targetIndex, 1, {
                ...msgs[targetIndex],
                text
            })
            return newMsgs
        })
        doneEdit();
    }

    const onDelete = (id) => {
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === id)
            if (targetIndex < 0) return msgs;
            const newMsgs = [...msgs]
            newMsgs.splice(targetIndex, 1)
            return newMsgs
        })
    }

    const doneEdit = () => setEditingId(null);

    return (
        <>
            <MsgInput mutate={onCreate} />
            <ul className="messages">
                {msgs.map(x => (<MsgItem key={x.id} 
                onUpdate={onUpdate} 
                onDelete={() => onDelete(x.id)}
                startEdit={() => setEditingId(x.id)} 
                isEditing={editingId === x.id} 
                {...x} />))}
            </ul>
        </>
    )
}


export default MsgList