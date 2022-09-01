import { useEffect, useState, memo } from 'react'
import '../index.css'

const Item = ({ currentQuestionIndex, index, result, prevIndex }) => {
    const positionNumber = index + 1
    const [activeSizeItem, setActiveSizeItem] = useState(false)
    const [goodItem, setGoodItem] = useState(false)
    const [badItem, setBadItem] = useState(false)

    useEffect(() => {
        if (currentQuestionIndex === index) {
            setActiveSizeItem(true)
        }
        if (activeSizeItem) {
            setActiveSizeItem(false)
        }
        if (prevIndex === index && result === 'y') {
            setGoodItem(true)
        }
        if (prevIndex === index && result === 'n') {
            setBadItem(true)
        }
    }, [currentQuestionIndex, prevIndex, result, index])

    useEffect(() => {
        if (index === 0) {
            setActiveSizeItem(true)
        }
    }, [])

    return (
        <div
            className={`item      
                    ${activeSizeItem && 'active-item'}
                    ${goodItem && 'good-item'}
                    ${badItem && 'bad-item'}
                
    `}
        >
            {positionNumber}
        </div>
    )
}

export default memo(Item)
