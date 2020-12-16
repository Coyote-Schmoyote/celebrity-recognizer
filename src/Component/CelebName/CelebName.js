import React from "react";

const CelebName = ({ results }) => {
  if (results && results.length < 1) {
    return <div className="pt2">Enter URL to get started...</div>;
  } else {
    return (
      <div>
        You look a lot like <h2>{results}</h2>
      </div>
    );
  }
};

export default CelebName;
