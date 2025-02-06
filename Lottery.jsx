import { useState } from "react";
import "./Lottery.css";

export default function Lottery() {
 let [ticket, setTicket] = useState([0,0,0]);

    function generateTicket() {
        let newTicket = [];
        for (let i = 0; i < 3; i++) {
            newTicket.push(Math.floor(Math.random() * 10));
        }
        setTicket(newTicket);
    }

    function checkWin() {
        if (ticket[0]===ticket[1] && ticket[1]===ticket[2]) {
            return <h2> Congratulations,You win!</h2>;
        } else {
            return <h2>You lose, Please Try again!</h2>;
        }
    }

    return (
        <div>
            <h1 id="font">Lottery Game!</h1>
            <span>
                <button onClick={generateTicket} className="btn">Generate lottery</button>
                <br />
                <br />
                <div className="ticket">
                    <h1>{ticket[0]} {ticket[1]} {ticket[2]}</h1>                        
                    {checkWin()}          
                </div>
                <br />
            </span>
        </div>
    );
}
