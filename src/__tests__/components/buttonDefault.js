import React from "react";
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'

import App from '../../App';

jest.useFakeTimers();

describe('ButtonDefault',() => {
  describe('when is faster and click default',() => {
    it('set to default speed ', () => {
      const { getByText, getByTestId } = render(<App />);
      const counter = getByTestId('frame-counter');

      fireEvent.click(getByText('Faster'));
      act(() => {
        jest.advanceTimersByTime( 10500 )
      });

      fireEvent.click(getByText('Default'));
      act(() => {
        jest.advanceTimersByTime( 10000 )
      });

      expect(counter).toHaveTextContent('30');
    })
  })

  describe('when is slower and click default',() => {
    it('set to default speed ', () => {
      const { getByTestId, getByText } = render(<App />)
      const counter = getByTestId('frame-counter');

      fireEvent.click(getByText('Slower'));
      act(() => {
        jest.advanceTimersByTime( 10000 )
      });  

      fireEvent.click(getByText('Default'));
      act(() => {
        jest.advanceTimersByTime( 10000 )
      });

      expect(counter).toHaveTextContent('15');
    })
  })    
})
