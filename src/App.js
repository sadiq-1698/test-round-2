import "./App.css";
import React from "react";
import countriesList from "./countries.js";
import Pagination from "@mui/material/Pagination";

function ListTile({ name, code }) {
  return (
    <div className="list-tile">
      <h3>Name - {name}</h3>
      <h3>Country code - {code}</h3>
    </div>
  );
}

function ListWrapper() {
  return (
    <>
      <ListTile name={countriesList[0].name} code={countriesList[0].code} />
    </>
  );
}

function PaginationComponent({ children, pageCount }) {
  const handleChange = (e, value) => {
    console.log(e, value);
  };
  return (
    <>
      <ListWrapper />
      <div className="pagination-btns">
        Showing 1 - 10 of 200 countries
        <Pagination onChange={handleChange} count={10} color="primary" />
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <PaginationComponent pageCount={10} />
    </div>
  );
}
