import { useEffect, useRef } from 'react';
import './Buttons.css';

export default function Buttons({ clearExpression, concatenateOperand, undoOperand, addOperator })
{
    const buttonReferences =
    {
        'c': useRef(null),
        'Backspace': useRef(null),
        '0': useRef(null),
        '1': useRef(null),
        '2': useRef(null),
        '3': useRef(null),
        '4': useRef(null),
        '5': useRef(null),
        '6': useRef(null),
        '7': useRef(null),
        '8': useRef(null),
        '9': useRef(null),
        '.': useRef(null),
        '+': useRef(null),
        '-': useRef(null),
        '*': useRef(null),
        '/': useRef(null),
        'Enter': useRef(null)
    };

    function handleKeyDown(event)
    {
        event.key in buttonReferences && buttonReferences[event.key].current.classList.add('active');
    }
    function handleKeyUp(event)
    {
        event.key in buttonReferences && buttonReferences[event.key].current.classList.remove('active');
    }

    useEffect(() =>
    {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () =>
        {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        }
    }, [])

    return (
        <div id='buttons'>
            <button id='clear-button' className='round-button red-button' ref={buttonReferences['c']}
                onClick={() => { clearExpression() }}>C</button>
            <button id='backspace-button' className='round-button red-button' ref={buttonReferences['Backspace']}
                onClick={() => { undoOperand() }}>⌫</button>

            <button id='zero-button' className='round-button' ref={buttonReferences['0']}
                onClick={() => { concatenateOperand('0') }}>0</button>
            <button id='one-button' className='round-button' ref={buttonReferences['1']}
                onClick={() => { concatenateOperand('1') }}>1</button>
            <button id='two-button' className='round-button' ref={buttonReferences['2']}
                onClick={() => { concatenateOperand('2') }}>2</button>
            <button id='three-button' className='round-button' ref={buttonReferences['3']}
                onClick={() => { concatenateOperand('3') }}>3</button>
            <button id='four-button' className='round-button' ref={buttonReferences['4']}
                onClick={() => { concatenateOperand('4') }}>4</button>
            <button id='five-button' className='round-button' ref={buttonReferences['5']}
                onClick={() => { concatenateOperand('5') }}>5</button>
            <button id='six-button' className='round-button' ref={buttonReferences['6']}
                onClick={() => { concatenateOperand('6') }}>6</button>
            <button id='seven-button' className='round-button' ref={buttonReferences['7']}
                onClick={() => { concatenateOperand('7') }}>7</button>
            <button id='eight-button' className='round-button' ref={buttonReferences['8']}
                onClick={() => { concatenateOperand('8') }}>8</button>
            <button id='nine-button' className='round-button' ref={buttonReferences['9']}
                onClick={() => { concatenateOperand('9') }}>9</button>
            <button id='dot-button' className='round-button' ref={buttonReferences['.']}
                onClick={() => { concatenateOperand('.') }}>.</button>

            <button id='add-button' className='round-button blue-button' ref={buttonReferences['+']}
                onClick={() => { addOperator('+') }}>+</button>
            <button id='subtract-button' className='round-button blue-button' ref={buttonReferences['-']}
                onClick={() => { addOperator('-') }}>-</button>
            <button id='multiply-button' className='round-button blue-button' ref={buttonReferences['*']}
                onClick={() => { addOperator('×') }}>×</button>
            <button id='divide-button' className='round-button blue-button' ref={buttonReferences['/']}
                onClick={() => { addOperator('÷') }}>÷</button>

            <button id='equals-button' className='round-button blue-button' ref={buttonReferences['Enter']}
                onClick={() => { addOperator('=') }}>=</button>
        </div>
    )
}