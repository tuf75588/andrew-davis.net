const {
  createFilePath,
  sourceInstanceName,
} = require("gatsby-source-filesystem");
const path = require("path");
exports.onCreateNode = async ({node, actions, getNode}) => {
  const {createNodeField} = actions;
  // look for mdx files
  if (node.internal.type === "Mdx") {
    // do some stuff
    const value = createFilePath({node, getNode});
    console.log(value);
    // value is /about and /blog-1
    createNodeField({
      name: "slug",
      node,
      value: `/new${value}`,
    });
    console.log(node);
    const field = getNode(node.parent);
    console.log({field});
    // createNodeField({
    //   name: "slug",
    //   node,
    //   value: `/${value}`,
    // });
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
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {id: node.id},
    });
  });
};
