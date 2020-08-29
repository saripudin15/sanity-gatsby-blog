export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4a5c9115bbe482bd9c8d86',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-36qswug2',
                  apiId: '43fba967-b9dd-4c85-bfe4-848363492498'
                },
                {
                  buildHookId: '5f4a5c92cedffd414761a86e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gbucq4st',
                  apiId: '02d0fea5-c304-47f6-87e4-b90b5af104f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saripudin15/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gbucq4st.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
