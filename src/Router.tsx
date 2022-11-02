import { Global } from "@emotion/react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "./pages/Hello";

const Router = () => {
  return (
    <React.Fragment>
      <Global styles={"reset"} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;
