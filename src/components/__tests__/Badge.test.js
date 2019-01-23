/* @flow */

import * as React from 'react';
import renderer from 'react-test-renderer';
import Badge from '../Badge';
import { red500 } from '../../styles/colors';

it('renders badge', () => {
  const tree = renderer.create(<Badge />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders badge with content', () => {
  const tree = renderer.create(<Badge>3</Badge>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders badge in different size', () => {
  const tree = renderer.create(<Badge size={12}>3</Badge>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders badge as hidden', () => {
  const tree = renderer
    .create(
      <Badge visible={false} size={12}>
        3
      </Badge>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders badge in different color', () => {
  const tree = renderer
    .create(<Badge style={{ backgroundColor: red500 }}>3</Badge>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
