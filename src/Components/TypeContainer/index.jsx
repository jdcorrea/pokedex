import React from "react";
import './TypeContainer.scss';

const TypeContainer = ({typeName}) => {
  return (
    <li className={`list__item ${typeName}`}>{typeName}</li>
  )
}

export default TypeContainer;