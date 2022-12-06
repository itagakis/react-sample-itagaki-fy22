import React from 'react'
import { Link } from 'react-router-dom'

const Howto = () => {
    return (
        <div>
            <h1>Howto/index.tsx</h1>
            <h2>Howtoページ</h2>
            <Link to="./sample/">サンプルページに進む</Link>
        </div>
    )
}

export default Howto
