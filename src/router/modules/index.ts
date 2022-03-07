// 静态路由
import homeRouter from './home';
import remainingRouter from './remaining';

// 原始静态路由（未做任何处理）
export const routes = [homeRouter];

// 不参与菜单的路由
export const remainingPaths = Object.keys(remainingRouter).map((v) => {
    return remainingRouter[v].path;
});
