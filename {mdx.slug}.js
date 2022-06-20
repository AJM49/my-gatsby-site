import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPostPage = () => {
    return (
        <Layout pageTitle="The Blog">
        <p>
            This is a blog post.
        </p>
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
        mdx(id: {eq: $id}) {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          body
        }
      }
    }
     `;

export default BlogPostPage;