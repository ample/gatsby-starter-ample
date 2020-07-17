module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `./src`,
        ignore: [
          "**/*.css",
          "**/*.jpeg",
          "**/*.jpg",
          "**/*.js",
          "**/*.json",
          "**/*.jsx",
          "**/*.png",
          "**/*.scss",
          "**/*.snap",
          "**/*.svg",
          "**/*.ts",
          "**/*.tsx"
        ]
      }
    },
    `gatsby-plugin-mdx`
  ]
}
