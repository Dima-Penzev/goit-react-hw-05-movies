import React from "react";
import Loader from "react-loader-spinner";
import s from "./Loader.module.css";

function Spiner() {
  return (
    <div className={s.loader}>
      <Loader type="Circles" color="#00BFFF" height={180} width={180} />
    </div>
  );
}

export default Spiner;
