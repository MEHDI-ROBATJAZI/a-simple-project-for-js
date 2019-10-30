import React from "react";
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'


import App from '../App'

jest.useFakeTimers();

describe('ButtonFaster',() => {
  test('after click and more 20 seconds the counter is 20', async () => {
    const { getByPlaceholderText, getByText } = render(<App />)
    const counter = getByPlaceholderText('0')

    await fireEvent.click(getByText('faster'))

    act(() => {
      jest.advanceTimersByTime(101000)
    })  

    expect(counter).toHaveTextContent('20')
  })
})
