import React from "react";
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'


import App from '../App'

jest.useFakeTimers();

describe('ButtonStop',() => {
  describe('when click stop counter freezes',() => {
    it('keep counter as 0',() => {      
      const { getByPlaceholderText, getByText } = render(<App />)
      const counter = getByPlaceholderText('0')                
            
      fireEvent.click(getByText('stop'))
      act(() => {
        jest.advanceTimersByTime( 1000 )
      })
            
      expect(counter).toHaveTextContent('0') 
    })
  })    

  describe('when click counter freezes',() => {
    it('set counter to 0', async() => {      
      const { getByPlaceholderText, getByText } = render(<App />)
      const counter = getByPlaceholderText('0')                
            
      await fireEvent.click(getByText('stop'))
      await fireEvent.click(getByText('start'))
      await act( async() => {
        await jest.advanceTimersByTime( 10000 )
      })
            
      expect(counter).toHaveTextContent('10') 
    })
  }) 
})
