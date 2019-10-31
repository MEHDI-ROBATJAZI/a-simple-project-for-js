import React from "react";
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'

import App from "../App"

jest.useFakeTimers();

describe('Canvas', () => {
  test('counter start with 0', () => {
    const { getByPlaceholderText } = render(<App />)
    const counter = getByPlaceholderText('0')
    
    expect(counter).toHaveTextContent('0')      
  })
  test('after 10seconds is set to 10', () => {
    const { getByPlaceholderText } = render(<App />)
    const counter = getByPlaceholderText('0')

    act(() => {
      jest.advanceTimersByTime(10000)
    })  
    expect(counter).toHaveTextContent('10')  
  })
})
