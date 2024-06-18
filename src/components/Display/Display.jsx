import './Display.css';

export default function Display({ total, operands, operators })
{
    return (
        <div>
            <p id='expression'>{operands.join(',')}</p>
            <p>{operands.slice(-1)}</p>
        </div>
    )
}