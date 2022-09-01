import Action from './Action'
import { useEffect, useState, memo } from 'react'
import { isUrlChecking } from '../utils/isUrlCgecking'

const Question = ({ question, handleChangeQuestion, resultsState }) => {
    const [isSrc, setIsSrc] = useState(false)

    const onChahgeCurrentQuestion = (nextStep, result) => {
        handleChangeQuestion(nextStep, result, question.id)
    }

    useEffect(() => {
        const result = isUrlChecking(question.content)

        if (result) {
            setIsSrc(true)
            return
        }
        if (!result && isSrc) {
            setIsSrc(false)
        }
    }, [isSrc, question.content])

    return (
        <>
            {question.title}
            <div className="question-wrapper">
                {isSrc ? (
                    <a href={question.content}>{question.content}</a>
                ) : (
                    <div>{question.content}</div>
                )}
                <div className="btn-wrapper">
                    {question.actions?.map((action) => (
                        <Action
                            key={action.id}
                            title={action.title}
                            result={action.result}
                            nextStep={action.nextStep}
                            onChahgeCurrentQuestion={onChahgeCurrentQuestion}
                            resultsState={resultsState}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default memo(Question)
