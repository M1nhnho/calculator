import './Display.css';

export default function Display({ total, expression, lastOperand })
{
    return (
        <div>
            <p id='expression-display'>{expression.join(' ')}</p>
            <p>{lastOperand || total}</p>
        </div>
    )
}