// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect'

import Display from './Display.js';

test('it renders correctly', () => {
  render(<Display />);
});

// getByText(/^locked$/i)
// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
test('shows locked and closed', () => {
    const { getByText } = render(<Display locked={true} closed={true} /> );

    // Act - getting the node by text
    getByText(/^closed$/i);
    getByText(/^locked$/i);
    // Assertion is if ^^^ is truthy
});

test('shows unlocked and open', () => {
    const { getByText } = render(<Display locked={false} closed={false} /> );

    // Act - getting the node by text
    getByText(/open/i);
    getByText(/unlocked/i);
    // Assertion is if ^^^ is truthy
});

// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

// First you'd want to import your render from the testing library
// Then set that rendered component to a variable and "expect" it toHaveClass "class-name"

test('Red class when locked or closed', () => {
    const { getByText } = render(<Display locked={true} closed={true} /> );

    // Act - getting the node by text
    // const locked = getByText(/Locked/i);
    // const closed = getByText(/closed/i);
    expect(getByText(/Locked/i)).toHaveClass('red-led');
    expect(getByText(/closed/i)).toHaveClass('red-led');
});
test('Green class when unlocked or open', () => {
    const { getByText } = render(<Display locked={false} closed={false} /> );

    // Act - getting the node by text
    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);
    // Assertion is if ^^^ is truthy
    expect(unlocked).toHaveClass('green-led');
    expect(open).toHaveClass('green-led');
});


    // // Assertion is if ^^^ is truthy
    // fireEvent.click(getByText(/Locked/i));

