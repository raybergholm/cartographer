import React from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import AppRouter from "../AppRouter";

import "../App.css";

const AppView = (props) => (
  <div>
    <Header />
    <AppRouter />
    <Footer />
  </div>
);

export default AppView;
