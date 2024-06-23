import './Buttons.css';

export default function Buttons({ clearExpression, concatenateOperand, undoOperand, addOperator })
{
    return (
        <div id='buttons'>
            <button id='clear-button' className='round-button red-button'
                onClick={() => { clearExpression() }}>C</button>
            <button id='backspace-button' className='round-button red-button'
                onClick={() => { undoOperand() }}>⌫</button>

            <button id='zero-button' className='round-button' 
                onClick={() => { concatenateOperand('0') }}>0</button>
            <button id='one-button' className='round-button'
                onClick={() => { concatenateOperand('1') }}>1</button>
            <button id='two-button' className='round-button'
                onClick={() => { concatenateOperand('2') }}>2</button>
            <button id='three-button' className='round-button'
                onClick={() => { concatenateOperand('3') }}>3</button>
            <button id='four-button' className='round-button'
                onClick={() => { concatenateOperand('4') }}>4</button>
            <button id='five-button' className='round-button'
                onClick={() => { concatenateOperand('5') }}>5</button>
            <button id='six-button' className='round-button'
                onClick={() => { concatenateOperand('6') }}>6</button>
            <button id='seven-button' className='round-button'
                onClick={() => { concatenateOperand('7') }}>7</button>
            <button id='eight-button' className='round-button'
                onClick={() => { concatenateOperand('8') }}>8</button>
            <button id='nine-button' className='round-button'
                onClick={() => { concatenateOperand('9') }}>9</button>
            <button id='dot-button' className='round-button'
                onClick={() => { concatenateOperand('.') }}>.</button>

            <button id='add-button' className='round-button blue-button'
                onClick={() => { addOperator('+') }}>+</button>
            <button id='subtract-button' className='round-button blue-button'
                onClick={() => { addOperator('-') }}>-</button>
            <button id='multiply-button' className='round-button blue-button'
                onClick={() => { addOperator('×') }}>×</button>
            <button id='divide-button' className='round-button blue-button'
                onClick={() => { addOperator('÷') }}>÷</button>

            <button id='equals-button' className='round-button blue-button'
                onClick={() => { addOperator('=') }}>=</button>
        </div>
    )
}