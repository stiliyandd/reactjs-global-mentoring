import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
  let props;
  let shallowCounter;
  let renderedCounter;
  let mountedCounter;

  const shallowTestComponent = () => {
    if (!shallowCounter) {
      shallowCounter = shallow(<Counter {...props} />);
    }
    return shallowCounter;
  };

  const renderTestComponent = () => {
    if (!renderedCounter) {
      renderedCounter = render(<Counter {...props} />);
    }
    return renderedCounter;
  };

  const mountTestComponent = () => {
    if (!mountedCounter) {
      mountedCounter = mount(<Counter {...props} />);
    }
    return mountedCounter;
  };  

  beforeEach(() => {
    props = {};
    shallowCounter = undefined;
    renderedCounter = undefined;
    mountedCounter = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
