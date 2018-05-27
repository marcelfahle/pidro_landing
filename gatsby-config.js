require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: 'Pidro, the Multiplayer Card Game for iPhone, iPad and Android',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API,
        previewMode: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Sanchez`],
      },
    },
  ],
}
