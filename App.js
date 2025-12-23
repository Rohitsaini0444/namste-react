import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement('div', { id: 'parent', key: 'parent' }, [
    React.createElement('div', { id: 'child1', key: 'child1' },
        [React.createElement('h1', { key: 'h1-1' }, "I'm an h1 tag"),
        React.createElement('h2', { key: 'h2-1' }, "I'm an h2 tag")]),
    React.createElement('div', { id: 'child2', key: 'child2' }, [
        React.createElement('h1', { key: 'h1-2' }, "I'm an h1 tag"),
        React.createElement('h2', { key: 'h2-2' }, "I'm an h2 tag")])
]
)
// const heading = React.createElement("h1", { id: "heading" }, "Hello from react");
const jsxHeading = <h1 id="heading" className="heading">Hello from JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);