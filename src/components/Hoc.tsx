import React, { Component } from "react";

const RootContainer = (number: number) => (
  FirstComponent: React.ComponentType,
  SecondComponent: React.ComponentType,
  ThirdComponent: React.ComponentType
) => {
  return class RootComponent extends Component {
    render() {
      if (number % 3 === 0 && number % 5 === 0) return <ThirdComponent />;
      if (number % 3 === 0) return <FirstComponent />;
      if (number % 5 === 0) return <SecondComponent />;

      return <div>{number}</div>;
    }
  };
};

export default RootContainer;
