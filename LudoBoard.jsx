import { useState } from 'react'
import './Ludo.css'
export default function LudoBoard() {

    let [blue, setBlue] = useState(0)
    
    let [yellow, setyellow] = useState(0)           //state variables
    
    let [green, setgreen] = useState(0)
    
    let [red, setred] = useState(0)


    let increaseBlue=()=>{
        setBlue(blue+1)
        console.log(`"The blue is rendered:",${blue}`)
    }


    let increaseYellow=()=>{
        setyellow(yellow+1)
        console.log(`"The yellow is rendered:",${yellow}`)
    }


    let increaseGreen=()=>{
        setgreen(green+1)
        console.log(`"The green is rendered:",${green}`)
    }

    let increaseRed=()=>{
        setred(red+1)
        console.log(`"The red is rendered:",${red}`)
    }


    return (
        <div>
            <h3>Ludo Board</h3>
            <div className="Ludo">
                <p>Blue moves={blue}</p>
                <button id="btn1"onClick={increaseBlue} >+1</button>
                <p>Yellow moves={yellow}</p>
                <button id="btn2"onClick={increaseYellow}>+1</button>
                <p>Green moves={green}</p>
                <button id="btn3"onClick={increaseGreen}>+1</button>
                <p>Red moves={red}</p>
                <button id="btn4"onClick={increaseRed}>+1</button>
            </div>
        </div>
    )
}