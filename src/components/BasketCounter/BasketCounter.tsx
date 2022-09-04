import React, {useState} from 'react';
import {minus, plus} from "../../assets";
import style from './BasketCounter.module.css'

type BasketCounterPropsType = {
    id: string
    quantity: number
    onCounter: (num: number, id: string) => void
}

export const BasketCounter: React.FC<BasketCounterPropsType> = ({
                                                                    id,
                                                                    quantity,
                                                                    onCounter
}) => {
    const [counter, setCounter] = useState(quantity);

    const onMinus = () => {
        if (counter < 1) return;
        setCounter(prevState => prevState - 1);
        onCounter(counter - 1, id)
    };

    const onPlus = () => {
        setCounter(prevState => prevState + 1);
        onCounter(counter + 1, id)
    };

    return (
        <div className={style.basketCounter}>
            <span className={style.basketCounter_minus_plus} onClick={onMinus}>
                <img src={minus} alt="minus"/>
            </span>
            <span className={style.inputWrap}>
                <input type="text" size={1} min={0} readOnly value={counter}/>
            </span>
            <span className={style.basketCounter_minus_plus} onClick={onPlus}>
                <img src={plus} alt="plus"/>
            </span>
        </div>
    );
};

