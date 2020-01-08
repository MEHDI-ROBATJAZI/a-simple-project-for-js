import React from "react";
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import SpeedButton from '../../../components/speedButton';

describe('SpeedButton',() => {
  describe('when click in a faster speed button',() => {
    it('set the time to half', () => {
      let initialTime = 1000;

      const button = (
        <SpeedButton
          setTime={(time) => initialTime = time}
          time={initialTime}
          speedButtonProps={{
            text: 'Faster',
            click: ({time, setTime}) => setTime(time / 2)
          }}
        />
      );
      
      const { getByText } = render(button);

      fireEvent.click(getByText('Faster'));

      expect(initialTime).toBe(500);
    })
  })
})
