import React from "react";
import './StatsList.scss';

const StatsList = (baseStat) => {
  const classListActive = "stats-list__item stats-list__item--active";
  const classListInactive = "stats-list__item";
  const liQuantity = 15;
  let statsToPrint = Math.floor(parseInt(baseStat.baseStat) / 15);

  let listItems = [];
  for (let i = 0; i < liQuantity; i++) {
    if (statsToPrint > 0) {
      listItems.push(<li key={i} className={classListActive}></li>);
      statsToPrint -= 1;
    } else {
      listItems.push(<li key={i} className={classListInactive}></li>);
    }
  }

  return (
    listItems
  );
}

export default StatsList;