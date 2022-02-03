import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonims">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
