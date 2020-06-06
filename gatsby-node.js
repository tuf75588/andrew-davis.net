/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const {createFilePath} = require("gatsby-source-filesystem");
const path = require("path");
exports.onCreateNode = async ({node, actions, getNode}) => {
  const {createNodeField} = actions;
  // look for mdx files
  if (node.internal.type === "Mdx") {
    // do some stuff
    const value = createFilePath({node, getNode});
    createNodeField({
      name: "slug",
      node,
      value: `/blog${value}`,
    });
  }
};

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild("🚨  ERROR: Loading 'createPages' query");
  }
  const posts = result.data.allMdx.edges;
  posts.forEach(({node}, index) => {
    console.log(node.fields);
  });
};
