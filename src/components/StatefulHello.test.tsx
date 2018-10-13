import * as React from 'react';
import * as enzyme from 'enzyme';
import StatefulHello from './StatefulHello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<StatefulHello name='Frank' />);

  expect(hello.find(".greeting").text()).toEqual('Hello Frank!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<StatefulHello name='Frank' enthusiasmLevel={1}/>);
  expect(hello.find(".greeting").text()).toEqual('Hello Frank!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<StatefulHello name='Frank' enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Frank!!!!!');
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<StatefulHello name='Frank' enthusiasmLevel={-1} />);
  }).toThrow();
});