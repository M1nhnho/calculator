import { useEffect, useRef } from 'react';
import './Buttons.css';
import DeleteButton from '../DeleteButton.jsx';
import OperandButton from '../OperandButton.jsx';
import OperatorButton from '../OperatorButton.jsx';

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
        if (event.key === '/')
        {
            event.preventDefault();
        }
        if (event.key in buttonReferences)
        {
            buttonReferences[event.key].current.click();
            buttonReferences[event.key].current.classList.add('active');
        }
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
            <DeleteButton buttonReferences={buttonReferences} clickFunction={clearExpression} name={'clear'} character={'C'} refKey={'c'} />
            <DeleteButton buttonReferences={buttonReferences} clickFunction={undoOperand} name={'backspace'} character={'⌫'} refKey={'Backspace'} />

            <OperandButton buttonReferences={buttonReferences} concatenateOperand={concatenateOperand} name={'zero'} character={'0'} />
            <OperandButton buttonReferences={buttonReferences} concatenateOperand={concatenateOperand} name={'one'} character={'1'} />
            <OperandButton buttonReferences={buttonReferences} concatenateOperand={concatenateOperand} name={'two'} character={'2'} />
            <OperandButton buttonReferences={buttonReferences} concatenateOperand={concatenateOperand} name={'three'} character={'3'} />
            <OperandButton buttonReferences={buttonReferences} concatenateOperand={concatenateOperand} name={'four'} character={'4'} />
            <OperandButton buttonReferences={buttonReferences} concatenateOperand={concatenateOperand} name={'five'} character={'5'} />
            <OperandButton buttonReferences={buttonReferences} concatenateOperand={concatenateOperand} name={'six'} character={'6'} />
            <OperandButton buttonReferences={buttonReferences} concatenateOperand={concatenateOperand} name={'seven'} character={'7'} />
            <OperandButton buttonReferences={buttonReferences} concatenateOperand={concatenateOperand} name={'eight'} character={'8'} />
            <OperandButton buttonReferences={buttonReferences} concatenateOperand={concatenateOperand} name={'nine'} character={'9'} />
            <OperandButton buttonReferences={buttonReferences} concatenateOperand={concatenateOperand} name={'dot'} character={'.'} />

            <OperatorButton buttonReferences={buttonReferences} addOperator={addOperator} name={'add'} character={'+'} />
            <OperatorButton buttonReferences={buttonReferences} addOperator={addOperator} name={'subtract'} character={'-'} />
            <OperatorButton buttonReferences={buttonReferences} addOperator={addOperator} name={'multiply'} character={'×'} refKey={'*'} />
            <OperatorButton buttonReferences={buttonReferences} addOperator={addOperator} name={'divide'} character={'÷'} refKey={'/'} />

            <OperatorButton buttonReferences={buttonReferences} addOperator={addOperator} name={'equals'} character={'='} refKey={'Enter'} />
        </div>
    )
}