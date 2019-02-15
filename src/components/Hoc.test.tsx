import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from "enzyme";

import Hoc from './Hoc';
import Fizz from "./Fizz";
import Buzz from "./Buzz";
import FizzBuzz from "./FizzBuzz";

describe('Fizzbuzz test until 15', () => {

  // You can change if you want to try another test case
  const testNumber = 15;

  for (let i = 0; i <= testNumber; i++) {
    it(`test for ${i}`, () => {
      const HocComponent = Hoc(i)(Fizz, Buzz, FizzBuzz);
      const wrapper = shallow(<HocComponent />);
    
      if (i % 3 === 0 && i % 5 === 0) expect(wrapper.contains(<FizzBuzz />)).toEqual(true);
      else if (i % 3 === 0) expect(wrapper.contains(<Fizz />)).toEqual(true);
      else if (i % 5 === 0) expect(wrapper.contains(<Buzz />)).toEqual(true);

    });
  }

});

