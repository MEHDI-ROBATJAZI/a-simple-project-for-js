import React from "react";
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'


import App from '../../App'

jest.useFakeTimers();

describe('ButtonFaster',() => {
  test('after click and more 20 seconds the counter is 20', async () => {
    const { getByTestId, getByText } = render(<App />)
    const counter = getByTestId('frame-counter');

    await fireEvent.click(getByText('faster'))

    await act(async () => {
      await jest.advanceTimersByTime(2500) // for some reason React has a delay of 0.5 seconds
    })  

    expect(counter).toHaveTextContent('4')
  })
})
