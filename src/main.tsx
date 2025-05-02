import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./layouts/layoutcomponents/Loader";
import "./index.scss";
import { RouterData } from "./commondata/routingdata";
import App from "./layouts/app";
import ErrorPages from "./layouts/ErrorPages";
import Error400 from "./components/Errorpages/Error400/Error400";
import Dashboard from "./components/Dashboard/Dashboard";

const container: HTMLElement | any = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Fragment>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
              <Route index element={<Dashboard />} />
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
