import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <NavLink className={css.link} to="/" end>
          Home
        </NavLink>
        <NavLink className={css.link} to={'movies'}>
          Movies
        </NavLink>
      </header>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
