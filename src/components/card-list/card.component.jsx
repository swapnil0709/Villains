import React from "react";

export const Card = ({ monster }) => {
  return (
    <div>
      <img
        src={`https://robohash.org/${monster.id}?set=set${monster.id}`}
        alt=""
      />
      <h1>{monster.name}</h1>
    </div>
  );
};
