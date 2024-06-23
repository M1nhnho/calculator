export default function OperandButton({ buttonReferences, concatenateOperand, name, character })
{
    return <button id={`${name}-button`} className='round-button' ref={buttonReferences[character]}
        onClick={() => { concatenateOperand(character) }}>{character}</button>
}