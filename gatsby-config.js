module.exports = {
  siteMetadata: {
    title: 'OpenStreetMap Brasil',
    description: "Informações sobre como mapear e participar da comunidade do OpenStreetMap.",
    url: "http://www.openstreetmap.com.br",
    twitter_username: "OSMBrasil",
    github_username:  "OSMBrasil",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify-cms`
  ],
}