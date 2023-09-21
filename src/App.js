// @ts-nocheck
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./views/Blog";
import BlogSingle from "./views/BlogSingle";
import { Provider } from "react-redux";
import store from "./store/ConfigureStore";

export default function App() {
  return (
    <>
      <section className="font-manrope">
        <Provider store={store}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Blog />} />
              <Route exact path="/blog-single" element={<BlogSingle />} />
            </Routes>
          </Router>
        </Provider>
      </section>
    </>
  );
}
