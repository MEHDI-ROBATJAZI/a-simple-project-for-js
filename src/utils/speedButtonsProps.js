const speedButtonsProps = [
  {
    text: 'Slower',
    bgColor: 'red',
    textColor: 'white',
    click: ({time, setTime}) => setTime(time * 2),
  },
  {
    text: 'Default',
    bgColor: 'blue',
    textColor: 'white',
    click: ({setTime}) => setTime(1000),
  },
  {
    text: 'Faster',
    bgColor: 'green',
    textColor: 'white',
    click: ({time, setTime}) => setTime(time / 2),
  },
];

export default speedButtonsProps;