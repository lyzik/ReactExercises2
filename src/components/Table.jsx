import React, { useState } from "react";
import "./table.css"

const Table = ({props}) => {
    const [isActive, setActive] = useState(true);

    const toggle = () =>{
        setActive(!isActive);
    }
    const columns = ['name', 'email', 'phone', 'button'];
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((el) => (
                            <th key={el}><h1>{el}</h1></th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {columns.slice(0,-1).map((el) => (
                            <th key={el}>{props[el]}</th>
                        ))}
                        <th><button onClick={toggle}>More</button></th>
                    </tr>
                    {
                        Object.values(props.company).map((value, index) => {
                           return(
                            <tr className={isActive ? 'hiddenContent': 'content'}>
                                <th colSpan={4}><h2>{value}</h2></th>
                            </tr>
                            )
                        })
                    }
                    <tr className={isActive ? 'hiddenContent': 'content'}>
                        <th colSpan={4}><a href={`https://${props.website}`}>{props.website}</a></th>
                    </tr>
                    <tr className={isActive ? 'hiddenContent': 'content'}>
                        {
                            Object.keys(props.address).slice(0,-1).map(key => {
                                return(
                                    <th><h2>{key}</h2></th>
                                )
                            })
                        }
                    </tr>
                    <tr className={isActive ? 'hiddenContent': 'content'}>
                        {
                            Object.values(props.address).slice(0,-1).map((value, index) => {
                                return(
                                    <th>{value}</th>
                                )
                            })
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table