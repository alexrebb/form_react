import { useEffect, useState, memo, useCallback } from 'react'

const Action = ({
    title,
    result,
    nextStep,
    onChahgeCurrentQuestion,
    resultsState,
}) => {
    const [nextStepIndex, setNextStepIndex] = useState(null)

    useEffect(() => {
        let count = 0
        nextStep?.forEach((element) => {
            if (!element.conditions && nextStep.length === 1) {
                setNextStepIndex(element.id)
            }

            if (element.conditions) {
                element.conditions.forEach((el) => {
                    resultsState.forEach((item) => {
                        if (item.id === el.id && item.result === el.result) {
                            count++
                        }
                    })
                    if (element.conditions.length === count) {
                        setNextStepIndex(element.id)
                        count = 0
                        return
                    }
                })
            }
        })
    }, [nextStep, resultsState])

    const handleClick = useCallback(() => {
        onChahgeCurrentQuestion(nextStepIndex, result)
    }, [nextStepIndex, onChahgeCurrentQuestion, result])

    return (
        <button
            className={`btn     
                    ${result === 'y' && 'yes'}
                    ${result === 'n' && 'no'}
                
    `}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default memo(Action)
