const path = require("path");
const {createFilePath} = require("gatsby-source-filesystem");

exports.onCreateNode = async ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === "Mdx") {
    const value = createFilePath({node, getNode});
    // parent is represented by a unique identitier
    const {sourceInstanceName} = getNode(node.parent);
    if (sourceInstanceName === "projects") {
      createNodeField({
        name: "slug",
        node,
        value: `/${sourceInstanceName}${value}`,
      });
      createNodeField({
        name: "type",
        node,
        value: "project",
      });
    } else if (sourceInstanceName === "posts") {
      createNodeField({
        name: "slug",
        node,
        value: `/${sourceInstanceName}${value}`,
      });
      createNodeField({
        name: "type",
        node,
        value: "post",
      });
    }
  }
};
