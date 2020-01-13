import React from "react";
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import SpeedButton from '../../../components/speedButton';
import speedButtonProps from '../../../utils/speedButtonsProps';

const [slowerButtonProps, defaultButtonProps, fasterButtonProps] = speedButtonProps;
const initialTime = 1000;

describe('SpeedButton',() => {
  describe('when clicked',() => {
    describe('in the slower button',() => {
      it('set the time to double', () => {
        const onClick = jest.fn();

        const button = (
          <SpeedButton
            onClick={onClick}
            time={initialTime}
            {...slowerButtonProps}
          />
        );

        const { getByText } = render(button);

        fireEvent.click(getByText('Slower'));

        expect(onClick).toHaveBeenCalledWith(2000);
      });
    });

    describe('in the default button',() => {
      it('set the time to initial value', () => {
        const onClick = jest.fn();

        const button = (
          <SpeedButton
            onClick={onClick}
            time={initialTime}
            {...defaultButtonProps}
          />
        );

        const { getByText } = render(button);

        fireEvent.click(getByText('Default'));

        expect(onClick).toHaveBeenCalledWith(1000);
      });
    });

    describe('in the slower button',() => {
      it('set the time to half', () => {
        const onClick = jest.fn();

        const button = (
          <SpeedButton
            onClick={onClick}
            time={initialTime}
            {...fasterButtonProps}
          />
        );

        const { getByText } = render(button);

        fireEvent.click(getByText('Faster'));

        expect(onClick).toHaveBeenCalledWith(500);
      });
    });
  });
});
