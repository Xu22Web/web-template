import { useMainStore } from '../store/index';
import router from './index';

// 重定向
router.beforeEach((to, from, next) => {
  // 匹配不到路由
  if (to.matched.length === 0) {
    next('/404');
    return;
  }
  // 标题
  document.title = `title-${to.meta.title}`;
  // 不需要验证
  if (!to.meta.requireAuth) {
    next();
    return;
  }
  const store = useMainStore();

  next();
});
