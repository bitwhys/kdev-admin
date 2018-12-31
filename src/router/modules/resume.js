/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const resumeRouter = {
  path: '/resume',
  component: Layout,
  redirect: 'noredirect',
  name: 'Resume',
  meta: {
    title: 'Resume',
    icon: 'component'
  },
  children: [
    {
      path: 'overview',
      component: () => import('@/views/main/resume/overview'),
      name: 'Overview',
      meta: { title: 'Overview' }
    },
    {
      path: 'introduction',
      component: () => import('@/views/main/resume/introduction'),
      name: 'Introduction',
      meta: { title: 'Introduction' }
    }
  ]
}

export default resumeRouter
