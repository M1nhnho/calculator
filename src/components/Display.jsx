export default function Display({ total, operands, operators })
{
    return (
        <>
            <p>{operands.slice(-1)}</p>
            <p>{operands.join(',')}</p>
        </>
    )
}