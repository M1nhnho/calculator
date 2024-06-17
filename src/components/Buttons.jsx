export default function Buttons({ setTotal, setOperands, setOperators })
{
    function updateOperand(digit)
    {
        setOperands((currOperands) =>
        {
            if (!(digit === '0' && currOperands[currOperands.length - 1].length === 0))
            {
                const operandsCopy = [...currOperands];
                operandsCopy[operandsCopy.length - 1] += digit;
                return operandsCopy;
            }
            return currOperands;
        });
    }

    return (
        <>
            <div>
                <button onClick={() => { updateOperand('0') }}>0</button>
                <button onClick={() => { updateOperand('1') }}>1</button>
                <button onClick={() => { updateOperand('2') }}>2</button>
                <button onClick={() => { updateOperand('3') }}>3</button>
                <button onClick={() => { updateOperand('4') }}>4</button>
                <button onClick={() => { updateOperand('5') }}>5</button>
                <button onClick={() => { updateOperand('6') }}>6</button>
                <button onClick={() => { updateOperand('7') }}>7</button>
                <button onClick={() => { updateOperand('8') }}>8</button>
                <button onClick={() => { updateOperand('9') }}>9</button>
            </div>
            <div>
                <button>C</button>
                <button>⌫</button>
                <button>+</button>
                <button>-</button>
                <button>×</button>
                <button>÷</button>
                <button>=</button>
            </div>
        </>
    )
}