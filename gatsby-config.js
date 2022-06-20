module.exports = {
  siteMetadata: {
          title: "My Gatsby Site",
    },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve:`gatsby-source-filesystem`,
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
};