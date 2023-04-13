import React, { FC, useEffect } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { fetchTokenGlobalDataAsync } from 'state/actions';
import { useAppDispatch } from 'state/hooks';
import MainLayout from 'layouts/MainLayout';

const VaultsPage = React.lazy(() => import('./pages/Home'));

const Router: FC = () => {
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    dispatch(fetchTokenGlobalDataAsync());
  };

  useEffect(() => {
    fetchData();
    setInterval(() => {
      fetchData();
    }, 60000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <VaultsPage /> }],
    },

    { path: '*', element: <Navigate replace to="/" /> },
  ]);

  return routes;
};

export default Router;
