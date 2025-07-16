"use client";
import "../../styles/globals.css";
import ComputerHeader from "../../src/components/Headers/computerHeader.js";
import Flyingname from "../../src/components/animated/flyingName/flyingname.js";
export default function page() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh"
    }}>
      <div style={{
        display: "flex",
      }}>
        <ComputerHeader></ComputerHeader>
      </div>
      <Flyingname></Flyingname>
    </div>
  );
}
