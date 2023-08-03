import * as React from 'react'
import {Link} from "gatsby";

const Stati = (props) => {
    return(
        <>
            <h1>Статьи</h1>
            <Link to="/">Main</Link>
            <p>Тут будут статьи</p>
        </>
    )
}

export const Head = () => (
    <>
    <title>Статьи</title>
    <meta name ="Статьи о логопедии" content="логопед дефектолог советы"/>
    </>
)

export default Stati
