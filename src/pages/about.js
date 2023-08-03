// Step 1: Import React
import * as React from 'react'
import {Link} from "gatsby";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
    return (
        <>
            <Layout pagetitle="About">
                <main>
                    <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
                </main>
                </Layout>
            <Link to="/">Back to Home</Link>
        </>
    )
}

export const Head = () =>
    (
        <>
    <title>About Me</title>
<meta name="description" content="Your description"/>
        </>
            )

// Step 3: Export your component
export default AboutPage