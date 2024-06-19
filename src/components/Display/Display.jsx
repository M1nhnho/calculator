import './Display.css';

export default function Display({ total, expression, lastOperand })
{
    return (
        <div id='display'>
            <p id='expression'>{expression.join(' ')}</p>
            <p id='current-number'>{lastOperand || total || '0'}</p>
        </div>
    )
}