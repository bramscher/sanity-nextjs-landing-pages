export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62f9153a4a1d067b96c73169',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s6a2uxun',
                  apiId: '33eb87ef-c0b2-42d8-bd7c-b41f930c5b45'
                },
                {
                  buildHookId: '62f9153a0d26997de742366c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wnjtc5mw',
                  apiId: '183100b4-2e0d-42be-8edd-f33a54a46492'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bramscher/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wnjtc5mw.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
