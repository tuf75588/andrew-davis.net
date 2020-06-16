const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreateNode = async ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({node, getNode});
    // parent is represented by a unique identitier
    const {sourceInstanceName} = getNode(node.parent);
    if (sourceInstanceName === 'projects') {
      createNodeField({
        name: 'slug',
        node,
        value: `/${sourceInstanceName}${value}`,
      });
      createNodeField({
        name: 'type',
        node,
        value: 'project',
      });
    } else if (sourceInstanceName === 'posts') {
      createNodeField({
        name: 'slug',
        node,
        value: `/blog${value}`,
      });
      createNodeField({
        name: 'type',
        node,
        value: 'post',
        /*
        what createNodeField will do is create a new
        property/value given what we specify
        in this example it would be
        {type: 'post'}
        */
      });
    } else {
      createNodeField({
        name: 'slug',
        node,
        value: `${value}`,
      });
      createNodeField({
        name: 'type',
        node,
        value: 'page',
      });
    }
  }
};

exports.createPages = async ({actions, graphql}) => {
  console.log('creating a page!');
  const {createPage} = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
              type
            }
          }
        }
      }
    }
  `);

  const posts = result.data.allMdx.edges;
  posts.forEach(({node}, index) => {
    const regularPage = node.fields.type === 'page';
    console.log(regularPage);
    if (regularPage) {
      return;
    } else {
      const templatePath =
        node.fields.type === 'post'
          ? `./src/templates/post.tsx`
          : `./src/templates/project.tsx`;
      createPage({
        path: node.fields.slug,
        component: path.resolve(templatePath),
        context: {
          slug: node.fields.slug,
        },
      });
    }
  });
  return posts;
};
