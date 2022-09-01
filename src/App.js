import './index.css'
import Item from './components/Item'
import Question from './components/Question'
import LOCAL_DATA from './store/tasks.json'
import { useState, useCallback } from 'react'

function App() {
    const [data] = useState(LOCAL_DATA)
    const [resultsState, setResultsState] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(data[0])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null)
    const [prevIndex, setPrevIndex] = useState(null)
    const [result, setResult] = useState(null)

    const handleChangeQuestion = useCallback(
        (nextId, result, prevId) => {
            const nextIndex = data.findIndex((item) => item.id === nextId)
            const prevIndex = data.findIndex((item) => item.id === prevId)

            const addData = {
                id: prevId,
                result,
            }

            setResultsState([...resultsState, addData])
            setCurrentQuestion(data[nextIndex])
            setCurrentQuestionIndex(nextIndex)
            setResult(result)
            setPrevIndex(prevIndex)
        },
        [data, resultsState]
    )

    return (
        <div className="container">
            <div className="line-wrapper">
                <div className="line" />
                <div className="items-wrapper">
                    {data?.map((item, index) => (
                        <Item
                            key={item.id}
                            currentQuestionIndex={currentQuestionIndex}
                            prevIndex={prevIndex}
                            index={index}
                            result={result}
                        />
                    ))}
                </div>
            </div>
            <Question
                question={currentQuestion}
                handleChangeQuestion={handleChangeQuestion}
                resultsState={resultsState}
            />
        </div>
    )
}

export default App
