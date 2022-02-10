import { createRouter, createWebHistory } from 'vue-router';
import itemRoute from '@/router/item';
import baseRoute from '@/router/base';

/* 추후 라우팅의 확장성을 고려 */
const finalRoute = [].concat(baseRoute, itemRoute);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: finalRoute,
});

export default router;
