/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Default Starter by ian",
    menuLinks: [
      { name: "home", link: "/" },
      { name: "contact", link: "/contact" },
      { name: "about", link: "/about" },
    ],
  },
  plugins: [`gatsby-plugin-sass`],
}
