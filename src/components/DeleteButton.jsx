export default function DeleteButton({ buttonReferences, clickFunction, name, character, refKey = null })
{
    return <button id={`${name}-button`} className='round-button red-button' ref={buttonReferences[refKey || character]}
        onClick={clickFunction}>{character}</button>
}