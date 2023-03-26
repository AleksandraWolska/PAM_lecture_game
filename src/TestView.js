import React, { useState } from 'react'

const TestView = (props) => {

    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState({ 0: "", 1: "", 2: "" });;
    const [shouldShow, setShouldShow] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [result, setResult] = useState(0);

    const handleSetAnswer = (answer) => {
        console.log(answer)
        if (answer == currentAnswer) {
            setCurrentAnswer("")
            setUserAnswers({ ...userAnswers, [number]: "" })
        } else {
            console.log("answer is set to " + answer)
            setCurrentAnswer(answer)
            setUserAnswers({ ...userAnswers, [number]: answer })
        }
    }

    const handleNext = () => {
        setCurrentAnswer("")

        if (number < 2) {
            setNumber(number + 1)
        } else {
            setNumber(0)
            countResult()
            setShouldShow(true)
        }
    }

    const handleBefore = () => {
        if (number < 2) {
            number++
        } else {

        }
    }

    const countResult = () => {
        let result = 0
        for (let i = 0; i < 3; i++) {
            props.questions[i].answer == userAnswers[i] && result++
        }
        setResult(result)
    }





    const showView = <div className='show-container'>
        <div className='result-points'>Twój wynik to {result}</div>

        <div>{props.questions[number].answer == userAnswers[number] ? "Poprawna!" : "Niepoprawna"}</div>
        <div className="questions-container">{props.questions[number].question}</div>
        <div className={
            props.questions[number].a == props.questions[number].answer
                ? props.questions[number].a == userAnswers[number]
                    ? "user-correct correct"
                    : "user-wrong correct"
                : props.questions[number].a == userAnswers[number]
                    ? "user-wrong wrong"
                    : "unchosen wrong"
        } onClick={() => handleSetAnswer(props.questions[number].a)}>{props.questions[number].a}</div>
        <div className={currentAnswer ? "answers-container chosen" : "answer-constainer"} onClick={() => handleSetAnswer(props.questions[number].b)}>{props.questions[number].b}</div>
        <div className={currentAnswer ? "answers-container chosen" : "answer-constainer"} onClick={() => handleSetAnswer(props.questions[number].c)}>{props.questions[number].c}</div>
        <div className={currentAnswer ? "answers-container chosen" : "answer-constainer"} onClick={() => handleSetAnswer(props.questions[number].d)}>{props.questions[number].d}</div>
        <div className='button-main' onClick={() => handleNext()}>Dalej</div>
    </div>


    const questionsView = <div className='test-inner-container'>
        <div className='test-container'>
            <div className="questions-container">{props.questions[number].question}</div>
            <div className={currentAnswer ? "answers-container chosen" : "answer-constainer"} onClick={() => handleSetAnswer(props.questions[number].a)}>{props.questions[number].a}</div>
            <div className={currentAnswer ? "answers-container chosen" : "answer-constainer"} onClick={() => handleSetAnswer(props.questions[number].b)}>{props.questions[number].b}</div>
            <div className={currentAnswer ? "answers-container chosen" : "answer-constainer"} onClick={() => handleSetAnswer(props.questions[number].c)}>{props.questions[number].c}</div>
            <div className={currentAnswer ? "answers-container chosen" : "answer-constainer"} onClick={() => handleSetAnswer(props.questions[number].d)}>{props.questions[number].d}</div>
            <div className='button-main' onClick={() => handleNext()}>Dalej</div>
        </div>
    </div>



    return (
        <div>{
            shouldShow ? showView : questionsView
        }</div>
    )
}

export default TestView