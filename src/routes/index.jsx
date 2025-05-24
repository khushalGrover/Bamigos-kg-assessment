import { lazy } from 'react';
const Home = lazy(() => import('@/pages/Home'));
const AdAgency = lazy(() => import('@/pages/AdAgency'));

export const appRoutes = [{
  path: '/',
  name: 'home',
  element: <Home />
}, {
  path: '/ad-agency',
  name: 'ad-agency',
  element: <AdAgency />
}
];