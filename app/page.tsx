"use client";

import React, { useState } from "react";
import CustomButton from "./components/customButton";

export default function Home() {
  const [operation, setOperation] = useState("");
  const [screenText, setScreenText] = useState("");
  const [isOperating, setIsOperating] = useState(false);
  const [isResultShown, setIsResultShown] = useState(false);
  console.log("Dev: operation => ", operation);
  console.log("Dev: screenText => ", screenText);
  console.log("Dev: isOperating => ", isOperating);
  console.log("Dev: isResultShown => ", isResultShown);

  function addsValueToOperation(
    value: string,
    type: "number" | "invert" | "percentage" | "operator" | "delete" | "result"
  ) {
    if (type == "result") {
      const operationNumber = new Function(`return ${operation}`)(); // Converts the string of the operation to a number of the result

      setScreenText(`${operationNumber}`);
      setOperation(`${operationNumber}`);
      setIsOperating(false);
      setIsResultShown(true);
    } else if (type == "delete") {
      setOperation("");
      setScreenText("");
      setIsOperating(false);
      setIsResultShown(false);
    } else if (type == "operator" && operation == "") {
      //Prevent adding an operator as the first caracter of the operation
      return;
    } else if (
      type == "operator" &&
      (isOperating == false || isResultShown == true)
    ) {
      //Adds the operator to the operation if the last input was a number or if the result is being shown
      setIsOperating(true);
      setIsResultShown(false);
      setOperation(operation + value);
    } else if (type == "operator" && isOperating == true) {
      setOperation(operation.slice(0, -1) + value); //Deletes the last caracter of the operation (an operator) and adds the new operator. This is used to change operators in case the user pressed the wrong one
      setIsResultShown(false);
    } else if (type == "number" && isResultShown == true) {
      setScreenText(value);
      setOperation("" + value);
      setIsOperating(false);
      setIsResultShown(false);
    } else if (type == "number" && isOperating == false) {
      setOperation(operation + value);
      setScreenText(screenText + value);
      setIsResultShown(false);
    } else if (type == "number" && isOperating == true) {
      setScreenText(value);
      setOperation(operation + value);
      setIsOperating(false);
      setIsResultShown(false);
    }
  }

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgrey",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Calculator */}
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          backgroundColor: "#F4F5F1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          height: "500px",
          borderRadius: "20px",
        }}
      >
        {/* screen */}
        <div
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            textAlign: "right",
            // alignItems: "center",
            width: "90%",
            height: "20%",
            backgroundColor: "#B5CDD7",
            boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
            borderRadius: "20px",
          }}
        >
          <p style={{ paddingRight: 20, fontSize: 18, fontWeight: 500 }}>
            {operation}
          </p>
          <p style={{ paddingRight: 20, fontSize: 46, fontWeight: 500 }}>
            {screenText}
          </p>
        </div>

        {/* buttons */}
        <div
          style={{
            margin: "10px",
            display: "grid",
            placeItems: "center",
            gridTemplateColumns: "auto auto auto auto",
            gridTemplateRows: "auto auto auto auto auto",
            width: "90%",
            height: "70%",
            borderRadius: "20px",
            gap: 5,
          }}
        >
          <CustomButton
            label={"AC"}
            color="grey"
            onClick={() => addsValueToOperation("", "delete")}
          ></CustomButton>
          <CustomButton
            label={"+/-"}
            color="grey"
            onClick={() => addsValueToOperation("+", "operator")}
          ></CustomButton>
          <CustomButton
            label={"%"}
            color="grey"
            onClick={() => addsValueToOperation("%", "operator")}
          ></CustomButton>
          <CustomButton
            label={"/"}
            color="yellow"
            onClick={() => addsValueToOperation("/", "operator")}
          ></CustomButton>
          <CustomButton
            label={"7"}
            color="black"
            onClick={() => addsValueToOperation("7", "number")}
          ></CustomButton>
          <CustomButton
            label={"8"}
            color="black"
            onClick={() => addsValueToOperation("8", "number")}
          ></CustomButton>
          <CustomButton
            label={"9"}
            color="black"
            onClick={() => addsValueToOperation("9", "number")}
          ></CustomButton>
          <CustomButton
            label={"x"}
            color="yellow"
            onClick={() => addsValueToOperation("*", "operator")}
          ></CustomButton>
          <CustomButton
            label={"4"}
            color="black"
            onClick={() => addsValueToOperation("4", "number")}
          ></CustomButton>
          <CustomButton
            label={"5"}
            color="black"
            onClick={() => addsValueToOperation("5", "number")}
          ></CustomButton>
          <CustomButton
            label={"6"}
            color="black"
            onClick={() => addsValueToOperation("6", "number")}
          ></CustomButton>
          <CustomButton
            label={"-"}
            color="yellow"
            onClick={() => addsValueToOperation("-", "operator")}
          ></CustomButton>
          <CustomButton
            label={"1"}
            color="black"
            onClick={() => addsValueToOperation("1", "number")}
          ></CustomButton>
          <CustomButton
            label={"2"}
            color="black"
            onClick={() => addsValueToOperation("2", "number")}
          ></CustomButton>
          <CustomButton
            label={"3"}
            color="black"
            onClick={() => addsValueToOperation("3", "number")}
          ></CustomButton>
          <CustomButton
            label={"+"}
            color="yellow"
            onClick={() => addsValueToOperation("+", "operator")}
          ></CustomButton>
          <CustomButton
            big
            label={"0"}
            color="black"
            onClick={() => addsValueToOperation("0", "number")}
          ></CustomButton>
          <CustomButton
            label={"."}
            color="black"
            onClick={() => addsValueToOperation(".", "number")}
          ></CustomButton>
          <CustomButton
            label={"="}
            color="yellow"
            onClick={() => addsValueToOperation("", "result")}
          ></CustomButton>
        </div>
      </div>
    </section>
  );
}
