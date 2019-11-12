// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect'

import Controls from './Controls.js';
// import { toggleClosed, toggleLocked } from '../utils/utils.js';

test('it renders correctly', () => {
  render(<Controls />);
});



// - buttons' text changes to reflect the state the door will be in if clicked
test('gate locked and closed, unlockButton click fires function', () => {
    const toggleLockedMock = jest.fn();
    const { getByText } = render(<Controls locked={true} closed={true} 
        toggleLocked={toggleLockedMock} />)

        // Act - getting the node by text
        const unlockButton = getByText(/^unlock gate$/i);
        // Assertion is if ^^^ is truthy

        fireEvent.click(unlockButton);
        expect(toggleLockedMock).toHaveBeenCalled();
});
test('gate unlocked and closed, openGateButton click fires function', () => {
    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls locked={false} closed={true} 
        toggleClosed={toggleClosedMock} />)

        // Act - getting the node by text
        const openGateButton = getByText(/^open gate$/i);
        // Assertion is if ^^^ is truthy

        fireEvent.click(openGateButton);
        expect(toggleClosedMock).toHaveBeenCalled();
});



// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open
test('open button disabled when gate is locked', () => {
    const toggleLockedMock = jest.fn();
    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls locked={true} closed={true} 
        toggleLocked={toggleLockedMock} toggleClosed={toggleClosedMock} />)

        // Act - getting the node by text
        // const unlockButton = getByText(/^unlock gate$/i);
        const openGateButton = getByText(/^open gate$/i);
        // Assertion is if ^^^ is truthy

        // fireEvent.click(unlockButton);
        // expect(toggleLockedMock).toHaveBeenCalled();
        
        fireEvent.click(openGateButton);
        expect(openGateButton).toBeDisabled();
});
test('open button disabled when gate is locked', () => {
    const toggleLockedMock = jest.fn();
    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls locked={false} closed={false} 
        toggleLocked={toggleLockedMock} toggleClosed={toggleClosedMock} />)

        // Act - getting the node by text
        const lockButton = getByText(/^lock gate$/i);
        // const openGateButton = getByText(/^open gate$/i);
        // Assertion is if ^^^ is truthy

        // fireEvent.click(unlockButton);
        // expect(toggleLockedMock).toHaveBeenCalled();
        
        fireEvent.click(lockButton);
        expect(lockButton).toBeDisabled();
});


        // // const touchdownButton = getByText(/home touchdown/i);
        // fireEvent.click(getByText(/home touchdown/i));
        // // how do we test that "setLionsScore" is being called on that button click?


// ### Controls Component

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
