import React, { Suspense } from "react";
import "./App.css";
// import Header from "./components/Header/Header";
import TourGuide from "./components/pages/TourGuide";
// import Routes from "./Routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header/Header";
import DetailTourGuide from "./components/pages/DetailTourGuide";
import Search from "./components/pages/Search";
import NavgationBar from "./components/Navigasi/NavgationBar";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Suspense fallback={loading}>
            <Routes>
              <Route exact path="/find" element={<Home />} />
              <Route path="/" element={<TourGuide />} />
              <Route
                path="/tour-guide/:paramsID"
                element={<DetailTourGuide />}
              />
              <Route path={`/tour-guide/search`} element={<Search />} />
            </Routes>
          </Suspense>
          <NavgationBar />
        </Router>
      </div>
    </div>
  );
}

export default App;
