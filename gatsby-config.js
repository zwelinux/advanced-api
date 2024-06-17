/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `advanced-api`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          `https://blogapiserver.pythonanywhere.com/api/posts/`,
        ],
      },
    },
  ],
}
