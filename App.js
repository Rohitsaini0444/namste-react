import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => <h1>This is Title Component</h1>;
const Heading = () => {
  return (
    <div id="heading" className="head" tabIndex="5">
        <Title />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);