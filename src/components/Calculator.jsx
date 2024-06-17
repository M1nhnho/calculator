import { useState } from 'react';
import Buttons from "./Buttons.jsx";
import Display from './Display.jsx';

export default function Calculator()
{
    const [total, setTotal] = useState(0);
    const [operands, setOperands] = useState(['']);
    const [operators, setOperators] = useState(['']);

    return (
        <>
            <Display total={total} operands={operands} operators={operators} />
            <Buttons setTotal={setTotal} setOperands={setOperands} setOperators={setOperators} />
        </>
    )
}