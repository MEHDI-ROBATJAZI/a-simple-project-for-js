import React from "react";
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import SpeedButton from '../../../components/speedButton';
import speedButtonProps from '../../../utils/speedButtonsProps';

const [slowerButtonProps, defaultButtonProps, fasterButtonProps] = speedButtonProps;

describe('SpeedButton',() => {
  describe('when clicked',() => {
    describe('in the slower button',() => {
      it('set the time to double', () => {
        let initialTime = 1000;

        const button = (
          <SpeedButton
            setTime={(time) => initialTime = time}
            time={initialTime}
            {...slowerButtonProps}
          />
        );

        const { getByText } = render(button);

        fireEvent.click(getByText('Slower'));

        expect(initialTime).toBe(2000);
      });
    });

    describe('in the default button',() => {
      it('set the time to initial value', () => {
        let initialTime = 1000;

        const button = (
          <SpeedButton
            setTime={(time) => initialTime = time}
            time={initialTime}
            {...defaultButtonProps}
          />
        );

        const { getByText } = render(button);

        fireEvent.click(getByText('Default'));

        expect(initialTime).toBe(1000);
      });
    });

    describe('in the slower button',() => {
      it('set the time to half', () => {
        let initialTime = 1000;

        const button = (
          <SpeedButton
            setTime={(time) => initialTime = time}
            time={initialTime}
            {...fasterButtonProps}
          />
        );

        const { getByText } = render(button);

        fireEvent.click(getByText('Faster'));

        expect(initialTime).toBe(500);
      });
    });
  });
});
