import * as React from 'react'
import {Link} from "gatsby";
import Greeting from "../components/greeting";
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Filialy = (props) => {
    return(
        <>
            <Layout pageTitle ="Филиалы">
                <p>Города где мы работаем</p>
                <StaticImage
                    alt="Our towns"
                    src="../images/towns.jpeg"
                />
            </Layout>
        </>
    )
}

export const Head = () => <Seo title="Филиалы"/>

export default Filialy