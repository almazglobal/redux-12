import React from 'react'

type CounterPropsType = {
    counter: number
    inc: any
    dec: any
    rnd: any
}
export const Counter: React.FC<CounterPropsType> = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button className={"btn btn-primary btn-lg"}
                    onClick={inc}>INC
            </button>
            <button className={"btn btn-primary btn-lg"}
                    onClick={dec}>DEC
            </button>
            <button className={"btn btn-primary btn-lg"}
                    onClick={rnd}>RND
            </button>
        </div>
    )
}