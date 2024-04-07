import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes, routes } from "../routes/routes";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
              exact={route.exact}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
              exact={route.exact}
            />
          ))}
    </Routes>
  );
};

export default AppRouter;
