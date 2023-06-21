import React from "react";

const KoreanDrama = (props) => {
  const styleBorder = {
    width: 200,
    border: 5,
    backgroundColor: "lightgrey",
    borderRadius: 15,
    padding: 5,
    margin: 10,
    justifyContent: "center",
    fontFamily: "sans-serif",
  };

  return (
    <div style={styleBorder}>
      <h3>
        ({props.id}) {props.title}
      </h3>
      <h4>Episode: {props.episode}</h4>
    </div>
  );
};

export default KoreanDrama;
