import MsgItem from './MsgItem';
import MsgInput from './MsgInput';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import fetcher from '../fetcher'
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const UserIds = ['roy','jay']
const getRandomUserId = () => UserIds[Math.round(Math.random())]

const MsgList = () => {
    const { query: {userId = ''} } = useRouter() 
    const [msgs, setMsgs] = useState([])
    const [editingId, setEditingId] = useState(null)
    const fetchMoreEl = useRef(null)
    const interSecting = useInfiniteScroll(fetchMoreEl)
    const [hasNext, setHasNext] = useState(true)

    const onCreate = async text => {
        const newMsg = await fetcher('post', '/messages', { text, userId })
        if (!newMsg) throw Error('something wrong')
        setMsgs(msgs => ([newMsg, ...msgs]))
    }

    const onUpdate = async (text, id) => {
        const newMsg = await fetcher('put', `/messages/${id}`, {text, userId})
        if (!newMsg) throw Error('something wrong')
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === id)
            if (targetIndex < 0) return msgs;
            const newMsgs = [...msgs]
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
        const newMsgs = await fetcher('get', '/messages', {params: { cursor: msgs[msgs.length -1]?.id || ''}})
        if(newMsgs.length == 0) {
            setHasNext(false)
            return
        }
        setMsgs(msg => [...msg,...newMsgs])
    }

    useEffect(() => {
        if(interSecting && hasNext) getMessages()
    }, [interSecting])


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
            <div ref={fetchMoreEl} />
        </>
    )
}


export default MsgList