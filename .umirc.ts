import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/react-dnd', component: '@/pages/ReactDnD' },
    { path: '/flex', component: '@/pages/Flex' },
  ],
});
