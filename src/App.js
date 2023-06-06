import './App.css';
import { useState } from "react";

const App = () => {
    let [countA, setCountA] = useState(1);
    let [countB, setCountB] = useState(10);
    let [countC, setCountC] = useState(100);
    console.log(countA);
    console.log(countB);
    console.log(countC);

    return (
        <div className="App">
            <>
                <p>{countA}</p>
                <button
                onClick = {() => {
                    setCountA(countA + 1)
                }}
                >ボタンA</button>

<p>{countB}</p>
                <button
                onClick = {() => {
                    setCountB(countB + 1)
                }}
                >ボタンB</button>

<p>{countC}</p>
                <button
                onClick = {() => {
                    setCountC(countC + 1)
                }}
                >ボタンC</button>
            </>
        </div>

    )
}

export default App;
