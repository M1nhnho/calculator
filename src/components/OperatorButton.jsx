export default function OperatorButton({ buttonReferences, addOperator, name, character, refKey = null })
{
    return <button id={`${name}-button`} className='round-button blue-button' ref={buttonReferences[refKey || character]}
        onClick={() => { addOperator(character) }}>{character}</button>
}