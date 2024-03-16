import { useState } from "react";

import "./App.css";
import Button from "./components/Button/Button.jsx";
import { DefaultSidebar } from "./components/DefaultSidebar/DefaultSidebar.jsx";
import { LoginPage } from "./components/LoginPage/LoginPage.jsx";
import SignUpPage from "./components/SignUpPage/SignUpPage.jsx";

// router imports

import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Router,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<>Home</>}></Route>
      <Route path="signin" element={<LoginPage></LoginPage>}></Route>,
      <Route path="signup" element={<SignUpPage></SignUpPage>}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
