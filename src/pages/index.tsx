import React from "react";
import Footer from "components/Footer";
import ScanSection from "components/ScanSection";
import Header from "components/Header";
import ResultsTable from "components/ResultsTable";
import { Routes, Route } from "react-router-dom";

//routing here

function index(): JSX.Element {
  console.log("Hello :D, remember to smile :)");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ScanSection />} />
        <Route path="results/:analysisID" element={<ResultsTable />} />
      </Routes>
      <Footer />
    </>
  );
}

export default index;
