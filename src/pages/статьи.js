import * as React from 'react'
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Stati = (props) => {
    return(
        <>
            <Layout pageTitle ="Статьи">
                <p>Все статьи тут</p>
                <StaticImage
                    alt="Articles"
                    src="../images/stati.jpg"
                />
            </Layout>
        </>
    )
}

export const Head = () => <Seo title = "Статьи"/>

export default Stati
