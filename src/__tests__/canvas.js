import React from "react";
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'

import Canvas from "../components/canvas"

jest.useFakeTimers();

test('counter start with 0, after 10seconds is set to 20', () => {
  const { getByPlaceholderText } = render(<Canvas timer={500} />)
  const inputNode = getByPlaceholderText('0')
  expect(inputNode).toHaveTextContent('0')  
  act(() => {
    jest.advanceTimersByTime(10000)
  })  
  expect(inputNode).toHaveTextContent('20')  
})



