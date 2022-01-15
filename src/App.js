import React, { useState } from 'react';
import Button from './components/Button';

function App() {
    let [aside, setAside] = useState('');
    let [main, setMain] = useState('0');

    let [numberButtons] = useState({
        values: [7, 8, 9, 4, 5, 6, 1, 2, 3],
    });

    let handleSum = () => {
        console.log(main);
        // let temp = main;

        // temp = `${temp} + `;
        // setAside(temp);
    };

    let [numberFunctions] = useState([
        {
            operation: '+',
            mathFunction: handleSum,
        },
    ]);

    let handleButtonNumpad = (value) => {
        // Do not concatenate 0 on initial
        if (main === '0') {
            main = '';
        }

        // If length is greater than 16, do not continue
        if (main.length > 17) {
            return;
        }
        let temp = main;

        temp = `${main}${value}`;
        setMain(temp);
    };

    return (
        <main className="container mt-3 mb-3 calculator">
            <div className="mb-2">
                <p className="t-r calculator-aside">{aside}</p>
                <p className="t-r calculator-main">{main}</p>
            </div>

            <div className="d-flex flex-row flex-wrap w-100">
                <Button className="flex-grow-1" value="="></Button>
                <Button className="w-25" value="C"></Button>
            </div>

            <div className="d-flex w-100">
                <div className="d-flex flex-row flex-wrap w-75">
                    {numberButtons.values.map((numbers, index) => {
                        return (
                            <Button
                                className="calculator-btn"
                                value={numbers}
                                handleClick={() => handleButtonNumpad(numbers)}
                                key={index}
                            ></Button>
                        );
                    })}

                    <div className="d-flex flex-row w-100">
                        <Button className="w-100" value="0"></Button>
                    </div>
                </div>
                <div className="d-flex flex-column w-25">
                    {numberFunctions.map((math, index) => {
                        return (
                            <Button
                                className="w-100"
                                value={math.operation}
                                handleClick={() => math.mathFunction()}
                                key={index}
                            ></Button>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

export default App;
