export default function Buttons({ setTotal, setOperands, setOperators })
{
    function concatenateOperand(digit)
    {
        setOperands((currOperands) =>
        {
            const operandsCopy = [...currOperands];
            operandsCopy[operandsCopy.length - 1] += digit;
            return operandsCopy;
        });
    }

    function undoOperand()
    {
        setOperands((currOperands) =>
        {
            const operandsCopy = [...currOperands];
            operandsCopy[operandsCopy.length - 1] = operandsCopy[operandsCopy.length - 1].slice(0, -1);
            return operandsCopy;
        });
    }

    return (
        <>
            <div>
                <button onClick={() => { concatenateOperand('0') }}>0</button>
                <button onClick={() => { concatenateOperand('1') }}>1</button>
                <button onClick={() => { concatenateOperand('2') }}>2</button>
                <button onClick={() => { concatenateOperand('3') }}>3</button>
                <button onClick={() => { concatenateOperand('4') }}>4</button>
                <button onClick={() => { concatenateOperand('5') }}>5</button>
                <button onClick={() => { concatenateOperand('6') }}>6</button>
                <button onClick={() => { concatenateOperand('7') }}>7</button>
                <button onClick={() => { concatenateOperand('8') }}>8</button>
                <button onClick={() => { concatenateOperand('9') }}>9</button>
            </div>
            <div>
                <button>C</button>
                <button onClick={() => { undoOperand() }}>⌫</button>
                <button>+</button>
                <button>-</button>
                <button>×</button>
                <button>÷</button>
                <button>=</button>
            </div>
        </>
    )
}