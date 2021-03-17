import React from "react";

export const Search = ({ placeholder, handleChange }) => {
  return (
    <input type="search" placeholder={placeholder} onChange={handleChange} />
  );
};
