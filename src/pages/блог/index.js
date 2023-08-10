import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql, Link } from "gatsby";

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle= "Мой блог">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/блог/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Дата: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        slug
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => <Seo title = "Блог"/>

export default BlogPage