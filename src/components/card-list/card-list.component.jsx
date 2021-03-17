import React from "react";
import "./cardList.css";
import { Card } from "./card.component";
export const CardList = ({ monsters }) => {
  return (
    <div className="card">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
