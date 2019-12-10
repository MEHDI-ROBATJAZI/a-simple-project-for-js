import React from "react";
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'

import App from '../../App'

jest.useFakeTimers();

describe('ButtonStop',() => {
  describe('when clicked',() => {
    it('keep counter as 0',() => {      
      const { getByTestId, getByText } = render(<App />)
      const counter = getByTestId('frame-counter');

      fireEvent.click(getByText('Stop'));
      fireEvent.click(getByText('Start'));
      fireEvent.click(getByText('Stop'));
      act(() => {
        jest.advanceTimersByTime( 1000 )
      })

      expect(counter).toHaveTextContent('0');
    })
  })    

  describe('when click counter freezes',() => {
    it('set counter to 0', async() => {      
      const { getByText, getByTestId } = render(<App />)
      const counter = getByTestId('frame-counter');
            
      await fireEvent.click(getByText('Stop'));
      await fireEvent.click(getByText('Start'));
      
      await act( async() => {
        await jest.advanceTimersByTime( 10000 )
      });
            
      expect(counter).toHaveTextContent('10');
    })
  }) 
})
