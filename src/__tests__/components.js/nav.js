import React from "react";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Nav from '../../components/nav';

jest.mock('../../components/buttonSlower', () => {
  return () => 'buttonSlower'
});

jest.mock('../../components/buttonDefault', () => {
  return () => 'buttonDefault'
});

jest.mock('../../components/buttonFaster', () => {
  return () => 'buttonFaster'
});

const renderComp = (props = {}) => {
  return render(
    <Nav
      {...props}
    />
  );
};

describe('formatButtons',() => {
  describe('When frame formate is circle', () => {
    const setFrameFormat = jest.fn();
    const { getByText } = renderComp({ setFrameFormat, frameFormat: 'circle'});
    const squareButton = getByText('Square');
    
    it('renders Square button', () => {
      expect(squareButton).toBeVisible();
    });

    describe('and button is clicked', () => {
      fireEvent.click(squareButton);

      it('triggers setFrameFormat with "square"', () => {
        expect(setFrameFormat).toHaveBeenCalledWith('square');
      });
    });
  });

  describe('When frame formate is square', () => {
    const setFrameFormat = jest.fn();
    const { getByText } = renderComp({ setFrameFormat, frameFormat: 'square'});
    const circleButton = getByText('Circle');
    
    it('renders Circle button', () => {
      expect(circleButton).toBeVisible();
    });

    describe('and button is clicked', () => {
      fireEvent.click(circleButton);

      it('triggers setFrameFormat with "circle"', () => {
        expect(setFrameFormat).toHaveBeenCalledWith('circle');
      });
    });
  });
});