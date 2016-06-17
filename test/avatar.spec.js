import React from 'react';
import { shallow, render } from 'enzyme';
import {expect} from 'chai';

import Avatar from '../lib/avatar';

describe('<Avatar/>', function () {
  it('should have an image to display the gravatar', function () {
    const wrapper = render(<Avatar/>);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have props for email and src', function () {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.props().email).to.be.defined;
    expect(wrapper.props().src).to.be.defined;
  });
});
