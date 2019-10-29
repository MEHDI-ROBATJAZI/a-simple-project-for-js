import React from "react";
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'


import App from '../App'
import ButtonSlower from '../components/buttonSlower'

jest.useFakeTimers();

describe('ButtonSlower',() => {
  test('after click and more 10 seconds the counter is 15', () => {
    const { getByPlaceholderText, getByText } = render(<App />)
    const counter = getByPlaceholderText('0')

    fireEvent.click(getByText('slower'))

    act(() => {
      jest.advanceTimersByTime(10000)
    })  

    expect(counter).toHaveTextContent('5') 
  })
})
