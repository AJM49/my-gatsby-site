import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  // eslint-disable-next-line no-unused-vars
  const data = useStaticQuery(graphql`
   query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    `)

   // console.log(data)
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>
            Blog
          </Link>
          </li>
        </ul>
      </nav>
      <main>
      <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      </div>
  )
}

export default Layout