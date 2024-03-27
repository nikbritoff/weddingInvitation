import { Suspense } from "react";

import { Route } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "~/shared/layout/Main/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      }
    >
      <Route element={<MainLayout />}>
        <Route path={"/"} lazy={() => import("~/pages/Invitation")} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Route>
    </Route>,
  ),
);

export const AppRouter = () => <RouterProvider router={router} />;
