import React from "react";
import ScanSection from "../components/ScanSection";
import { MainProps } from "../interfaces";

//routing here

function index({ result }: MainProps): JSX.Element {
  return (
    <div>
      <ScanSection result={ result }/>
    </div>
  );
}

export default index;
