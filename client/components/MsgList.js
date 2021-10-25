import MsgItem from './MsgItem';
import MsgInput from './MsgInput';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import fetcher from '../fetcher'

const UserIds = ['roy','jay']
const getRandomUserId = () => UserIds[Math.round(Math.random())]



// const originalMsgs = Array(50).fill(0).map((_, i) => ({
//     id: i + 1,
//     userId: getRandomUserId(),
//     timestamp: 123456789 + i * 1000 * 60,
//     text: `${i + 1} mock text`
// }))

//console.log(JSON.stringify(originalMsgs));

// [
//     {
//         id: 1,
//         userId: getRandomUserId(),
//         timestamp: 123455679123,
//         text: '1 mock text'
//     },
// ]

const MsgList = () => {
    const { query: {userId = ''} } = useRouter() 
    const [msgs, setMsgs] = useState([])
    const [editingId, setEditingId] = useState(null)

    const onCreate = async text => {
        const newMsg = await fetcher('post', '/messages', { text, userId })
        if (!newMsg) throw Error('something wrong')
        // const newMsg = {
        //     id: msgs.length,
        //     userId: getRandomUserId(),
        //     timestamp: Date.now(),
        //     text: `${msgs.length + 1} ${text}`
        // }
        setMsgs(msgs => ([newMsg, ...msgs]))
        //console.log(msgs);
    }

    const onUpdate = async (text, id) => {
        const newMsg = await fetcher('put', `/messages/${id}`, {text, userId})
        if (!newMsg) throw Error('something wrong')
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === id)
            if (targetIndex < 0) return msgs;
            const newMsgs = [...msgs]
            // newMsgs.splice(targetIndex, 1, {
            //     ...msgs[targetIndex],
            //     text
            // })
            newMsgs.splice(targetIndex, 1, newMsg)
            return newMsgs
        })
        doneEdit();
    }

    const onDelete = async (id) => {
        const receivedId = await fetcher('delete', `/messages/${id}`, { params: {userId} })
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === receivedId + '')
            if (targetIndex < 0) return msgs;
            const newMsgs = [...msgs]
            newMsgs.splice(targetIndex, 1)
            return newMsgs
        })
    }

    const doneEdit = () => setEditingId(null);

    const getMessages = async () => {
        const msgs = await fetcher('get', '/messages')
        setMsgs(msgs)
    }

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <>
            <MsgInput mutate={onCreate} />
            <ul className="messages">
                {msgs.map(x => (<MsgItem key={x.id} 
                onUpdate={onUpdate} 
                onDelete={() => onDelete(x.id)}
                startEdit={() => setEditingId(x.id)} 
                isEditing={editingId === x.id}
                myId={userId} 
                {...x} />))}
            </ul>
        </>
    )
}


export default MsgList