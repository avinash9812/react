import { useState } from "react";
import './Form.css';

export default function Forms() {
    let [fullName, setFullName] = useState("");
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    function HandleSubmit(event) {
        event.preventDefault();
        const formData = {                                                         //submit function
            fullName: fullName,
            userName: userName,
            password: password
        };
        console.log("Form Data:", formData);
        alert('Form submitted');
        console.log('Form has been submitted');
    }

    function HandleChange(event) {
        console.log(event.target.value);
        setFullName(event.target.value);                                            //handlechange
    }

    function HandleUsername(event) {
        console.log(event.target.value);                                             //handleusername 
        setUserName(event.target.value);
    }

    function HandlePass(event) {
        console.log(event.target.value);                                              //password
        setPassword(event.target.value);            
    }

    return (
        <div className="first">
            <form onSubmit={HandleSubmit}>
                <label htmlFor="fullname">FullName</label>
                <br /><br />
                <input
                    placeholder="enter your name"
                    type="text"
                    value={fullName}
                    onChange={HandleChange}
                />
                <br /><br />
                <label htmlFor="username">Username</label>
                <br /><br />
                <input
                    placeholder="enter your username"
                    type="text"
                    value={userName}
                    onChange={HandleUsername}
                />
                <br /><br />
                <label htmlFor="password">Password</label>
                <br /><br />
                <input
                    placeholder="enter your password"
                    type="password"
                    value={password}
                    onChange={HandlePass}
                />
                <br /><br />
                <button type="submit">Submit</button>
                <br /><br />
            </form>
        </div>
    );
}