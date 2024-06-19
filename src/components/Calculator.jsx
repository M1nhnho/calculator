import { useEffect, useState } from 'react';
import Buttons from "./Buttons/Buttons.jsx";
import Display from './Display/Display.jsx';

export default function Calculator()
{
    const [total, setTotal] = useState(null);
    const [expression, setExpression] = useState([]);
    const [lastOperand, setLastOperand] = useState('');
    const [isOperating, setIsOperating] = useState(false);
    
    function clearExpression()
    {
        /* Later implement functionality for CE instead of only C */
        setExpression([]);
        setLastOperand('');
    }

    function concatenateOperand(digit)
    {
        setLastOperand((currLastOperand) =>
        {
            if (total)
            {
                setTotal(null);
                setExpression([]);
            }
            if (isOperating)
            {
                setIsOperating(false);
                return digit;
            }
            return !currLastOperand && digit === '0' ? currLastOperand : currLastOperand + digit;
        });
    }

    function undoOperand()
    {
        setLastOperand((currLastOperand) =>
        {
            return currLastOperand.slice(0, -1);
        });
    }

    function addOperator(operator)
    {
        setExpression((currExpression) =>
        {
            const expressionCopy = [...currExpression];
            if (isOperating)
            {
                expressionCopy[expressionCopy.length - 1] = operator;
            }
            else
            {
                expressionCopy.push(Number(lastOperand));
                expressionCopy.push(operator);
            }
            return expressionCopy;
        })
    }

    useEffect(() =>
    {
        if (expression.length > 1)
        {
            !isOperating && setIsOperating(true);
            if (expression[expression.length - 1] === '=')
            {
                setLastOperand('')
                setTotal(() =>
                {
                    let total = expression[0];
                    for (let i = 1; i < expression.length - 1; i += 2)
                    {
                        switch(expression[i])
                        {
                            case '+':
                                total += expression[i + 1];
                                break;
                            case '-':
                                total -= expression[i + 1];
                                break;
                            case '×':
                                total *= expression[i + 1];
                                break;
                            case '÷':
                                total /= expression[i + 1];
                                break;
                        }
                    }
                    return total;
                });
            }
        }
    }, [expression])

    return (
        <>
            <Display total={total} expression={expression} lastOperand={lastOperand} />
            <Buttons clearExpression={clearExpression} concatenateOperand={concatenateOperand} undoOperand={undoOperand} addOperator={addOperator} />
        </>
    )
}