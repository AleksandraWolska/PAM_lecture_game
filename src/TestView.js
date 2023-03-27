import React, { useState } from 'react'
import "./styles.css"



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





    const showView = <div className='test-inner-container'>
        <div className='test-container'>
            <div className='result-points'><h2>Twój wynik to {result} na 3 możliwe</h2><h3>Pytanie {number + 1}</h3></div>


            <div>{props.questions[number].answer == userAnswers[number] ? <h1>Poprawna!</h1> : <h1>Niepoprawna</h1>}</div>
            <div className="questions-container"><h2>{props.questions[number].question}</h2></div>
            <div className={
                props.questions[number].a == props.questions[number].answer
                    ? props.questions[number].a == userAnswers[number]
                        ? "answers-container user-correct correct"
                        : "answers-container correct"
                    : props.questions[number].a == userAnswers[number]
                        ? "answers-container user-wrong wrong"
                        : "answers-container unchosen wrong"
            } onClick={() => handleSetAnswer(props.questions[number].a)}>{props.questions[number].a}</div>

            <div className={
                props.questions[number].b == props.questions[number].answer
                    ? props.questions[number].b == userAnswers[number]
                        ? "answers-container user-correct correct"
                        : "answers-container correct"
                    : props.questions[number].b == userAnswers[number]
                        ? "answers-container user-wrong wrong"
                        : "answers-container unchosen wrong"
            } onClick={() => handleSetAnswer(props.questions[number].b)}>{props.questions[number].b}</div>
            <div className={
                props.questions[number].c == props.questions[number].answer
                    ? props.questions[number].c == userAnswers[number]
                        ? "answers-container user-correct correct"
                        : "answers-container  correct"
                    : props.questions[number].c == userAnswers[number]
                        ? "answers-container user-wrong wrong"
                        : "answers-container unchosen wrong"
            } onClick={() => handleSetAnswer(props.questions[number].c)}>{props.questions[number].c}</div>
            <div className={
                props.questions[number].d == props.questions[number].answer
                    ? props.questions[number].d == userAnswers[number]
                        ? "answers-container user-correct correct"
                        : "answers-container  correct"
                    : props.questions[number].d == userAnswers[number]
                        ? "answers-container user-wrong wrong"
                        : "answers-container unchosen wrong"
            } onClick={() => handleSetAnswer(props.questions[number].d)}>{props.questions[number].d}</div>
            <div className='button-main' onClick={() => handleNext()}>Dalej</div>
        </div>
    </div>


    const questionsView = <div className='test-inner-container'>
        <div className='test-container'>
            <h3>Pytanie {number + 1}</h3>
            <div className="questions-container"><h2>{props.questions[number].question}</h2></div>
            <div className={currentAnswer === props.questions[number].a ? "answers-container chosen" : "answers-container"} onClick={() => handleSetAnswer(props.questions[number].a)}>{props.questions[number].a}</div>
            <div className={currentAnswer === props.questions[number].b ? "answers-container chosen" : "answers-container"} onClick={() => handleSetAnswer(props.questions[number].b)}>{props.questions[number].b}</div>
            <div className={currentAnswer === props.questions[number].c ? "answers-container chosen" : "answers-container"} onClick={() => handleSetAnswer(props.questions[number].c)}>{props.questions[number].c}</div>
            <div className={currentAnswer === props.questions[number].d ? "answers-container chosen" : "answers-container"} onClick={() => handleSetAnswer(props.questions[number].d)}>{props.questions[number].d}</div>
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