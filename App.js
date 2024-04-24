import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {
      id: "parent",
    },
    [
        React.createElement("div", { id: "child1"}, [
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
        ]),
        React.createElement("div", {id: "child2"}, [
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
        ]),
    ]
  );

  // JSX (transpiled before it reaches JS) - Parcel - Babel

  // JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

  const Title = () => (
  <h1 className = "heading"  tabIndex={5}>Namaste React using JSX </h1>
  )

  // React Functional Component 
  const HeadingComponent = () => {
    return (
    <div id="container">
        {Title()}
        {<Title />}
        <Title />
        <Title></Title>
         <h1>Namaste React Functional Component</h1>
    </div>)
  }

  const HeadingComponent1 = () => (
    <div id="container">
        {title}
         <h1>Namaste React Functional Component</h1>
    </div>
  )

  console.log(parent);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root
  //async defer
  root.render(<HeadingComponent />);