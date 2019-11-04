import React from "react";
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'


import App from '../../App'

jest.useFakeTimers();

describe('ButtonSlower',() => {
  test('after click and more 10 seconds the counter is 5',() => {
    const { getByTestId, getByText } = render(<App />)
    const counter = getByTestId('frame-counter');

    fireEvent.click(getByText('slower'))
    act(() => {
      jest.advanceTimersByTime( 10000 )
    })  

    expect(counter).toHaveTextContent('5') 
  })
})
