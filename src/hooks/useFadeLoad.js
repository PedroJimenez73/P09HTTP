import { useEffect, useRef } from 'react'

export function useFadeLoad() {

    const containerRef = useRef(null);

    useEffect(() => {
        containerRef.current.classList.add('fade');
        setTimeout(() => {
            containerRef.current.classList.add('show');
        }, 100)
    })

    return containerRef;
}