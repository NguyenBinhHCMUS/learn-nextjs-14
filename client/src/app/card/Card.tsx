"use client";

import { useState } from "react";
import clsx from "clsx";

import card from "./card.module.css";
import "./card.scss";

export default function Card() {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  return (
    <div
      className={clsx(`${card.card} card`, {
        "card--expand": isExpand,
      })}
    >
      Card
    </div>
  );
}
