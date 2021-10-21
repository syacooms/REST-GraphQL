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
    return (
        <>
            <MsgInput mutate={onCreate} />
            <ul className="messages">
                {msgs.map(x => (<MsgItem key={x.id} {...x} />))}
            </ul>
        </>
    )
}


export default MsgList