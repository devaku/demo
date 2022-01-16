import React, { useState } from 'react';
import Button from './components/Button';

function App() {
    // Use to display the operations
    let [aside, setAside] = useState('');

    // The main numbers being displayed
    let [main, setMain] = useState('0');

    let [initialClear, setInitialClear] = useState(false);
    let [startOver, setStartOver] = useState(false);
    let [holder, setHolder] = useState('0');
    let [mathOperation, setMathOperation] = useState('');

    const numberButtons = {
        values: [7, 8, 9, 4, 5, 6, 1, 2, 3],
    };

    let handleSum = () => {
        // If there's a mathOperation already in play
        // Evaluate that first
        if (mathOperation === 'sum') {
            let firstValue = parseInt(holder);
            let secondValue = parseInt(main);

            console.log(`${firstValue} + ${secondValue}`);
            let total = firstValue + secondValue;
            let temp = `${total} + `;

            // Store the value for evaluation
            setHolder(total);

            setAside(temp);
        } else {
            let temp = main;

            // Store the value for evaluation
            setHolder(temp);
            temp = `${temp} + `;

            setMathOperation('sum');

            // Display the value
            setAside(temp);
        }
        // Clear the value on main
        // So that new values can be added
        setInitialClear(true);
    };

    let handleEqual = () => {
        switch (mathOperation) {
            case 'sum':
                let firstValue = parseInt(holder);
                let secondValue = parseInt(main);
                let total = firstValue + secondValue;
                let temp = `${firstValue} + ${secondValue} =`;

                // Store the value for evaluation
                setHolder(total);

                // Display
                setAside(temp);
                setMain(total);
                setMathOperation('');
                setStartOver(true);
                break;

            default:
                break;
        }
    };

    let handleClear = () => {
        setMain('0');
        setAside('');
        setHolder('');
        setMathOperation('');
    };

    const numberFunctions = [
        {
            operation: '+',
            mathFunction: handleSum,
        },
    ];

    let handleButtonNumpad = (value) => {
        let temp = main;
        if (startOver) {
            setStartOver(false);
            setMain('');
            temp = '';
            setAside('');
            setHolder('');
            setMathOperation('');
        }

        // Do not concatenate 0 on initial
        if (temp === '0') {
            temp = '';
        }

        // If length is greater than 16, do not continue
        if (temp.length > 17) {
            return;
        }

        // If aside is displayed, clear the initial value
        if (initialClear) {
            temp = '';
            setInitialClear(false);
        }

        temp = `${temp}${value}`;
        setMain(() => temp);
    };

    return (
        <main className="container mt-3 mb-3 calculator">
            <div className="mb-2">
                <p className="t-r calculator-aside">{aside}</p>
                <p className="t-r calculator-main">{main}</p>
            </div>

            <div className="d-flex flex-row flex-wrap w-100">
                <Button
                    className="flex-grow-1"
                    handleClick={() => handleEqual()}
                    value="="
                ></Button>
                <Button
                    className="w-25"
                    value="C"
                    handleClick={() => handleClear()}
                ></Button>
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
