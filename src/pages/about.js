// Step 1: Import React
import * as React from 'react'
import {Link} from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

// Step 2: Define your component
const AboutPage = () => {
    return (
        <>
            <Layout pageTitle="О нас">
                <main>
                    <p>Наша компания такая хорошая компания</p>
                </main>
                </Layout>
        </>
    )
}

export const Head = () => <Seo title = "О нас"/>

// Step 3: Export your component
export default AboutPage