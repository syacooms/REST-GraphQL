import { useState,useEffect, useRef, useCallback } from 'react'

const useInfiniteScroll = targetEl => {
    const observerRef = useRef(null)
    const [interSecting, setInterSecting] = useState(false)
    
    const getObserver = useCallback(() =>{
        if(!observerRef.current) {
            observerRef.current = new IntersectionObserver(entires => setInterSecting(
                entires.some(entry => entry.isIntersecting) 
            ))
        }
        return observerRef.current
    }, [observerRef.current])

    //감시할 대상
    useEffect(() => {
        if(targetEl.current) getObserver().observe(targetEl.current)

        //화면상 존재하지 않을 경우
        return () => {
            getObserver().disconnect()
        }
    }, [targetEl.current])
        
    return interSecting
}

export default useInfiniteScroll