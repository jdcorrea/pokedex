import React from "react";
import './TypeContainer.scss';

const TypeContainer = ({typeName}) => {
  return (
    <li className={`list__item ${typeName}`}>
      <p className="describe-item">{typeName}</p>
    </li>
  )
}

export default TypeContainer;