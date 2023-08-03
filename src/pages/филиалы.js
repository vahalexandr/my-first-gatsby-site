import * as React from 'react'
import {Link} from "gatsby";
import Greeting from "../components/greeting";

const Filialy = (props) => {
    return(
        <>
            <h1>Филиалы</h1>
            <Link to="/">Main</Link>
            <p>Тут будут филиалы</p>


            <div>
                <Greeting name="Megan"/>
                <Greeting name="Obinna"/>
            </div>
        </>
    )
}

export const Head = () => (
    <>
        <title>Филиалы</title>
        <meta name ="" content=""/>
    </>
)

export default Filialy