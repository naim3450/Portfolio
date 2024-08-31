import React from 'react'

const List = ({ text, className }) => {
    return (
        <li className={`${className} font-Ubuntu`}> {text}</li>
    )
}

export default List