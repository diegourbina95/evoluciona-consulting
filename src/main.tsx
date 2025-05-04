import React, { Fragment, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./layouts/layoutcomponents/Loader";
import "./index.scss";
import { RouterData } from "./commondata/routingdata";

import ErrorPages from "./layouts/ErrorPages";
import Error400 from "./components/error-pages/Error400";

const AppLayout = lazy(() => import("@/layouts/app"));
const AutenticationLayout = lazy(() => import("@/layouts/AutenticationLayout"));

const LoginPage = lazy(() => import("@/views/Login"));
const DashboardPage = lazy(() => import("@/views/Dashboard"));
const ForgotPasswordPage = lazy(() => import("@/views/ForgotPassword"));

const container: HTMLElement | any = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Fragment>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            {/* Authentication Pages */}
            <Route element={<AutenticationLayout />}>
              <Route
                path={`${import.meta.env.BASE_URL}login`}
                element={<LoginPage />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}recuperar-password`}
                element={<ForgotPasswordPage />}
              />
            </Route>

            <Route path={`${import.meta.env.BASE_URL}`} element={<AppLayout />}>
              <Route index element={<DashboardPage />} />
              {RouterData.map((idx) => (
                <Route
                  path={idx.path}
                  element={idx.element}
                  key={Math.random()}
                />
              ))}
            </Route>
            <Route
              path="*"
              element={
                <ErrorPages>
                  <Error400 />
                </ErrorPages>
              }
            />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  </React.StrictMode>
);
