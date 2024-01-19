import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

export default function Header() {
  return (
    <div className="holder">
      <header className="header">
        <NavBar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            consectetur perspiciatis nam ipsam odit, adipisci non ad numquam
            voluptate fuga vero, quod quisquam. Tempora, ipsam?
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
}
