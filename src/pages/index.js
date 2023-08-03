import * as React from 'react'
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <>
        <h1>Это главная страница</h1>
        <Layout pagetitle="Homepage">
            <p>I'm making this by following the Gatsby Tutorial</p>
            <StaticImage
                alt="I'm your daddy!"
                src="../images/wader.jpg"
            />
        </Layout>
        </>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage