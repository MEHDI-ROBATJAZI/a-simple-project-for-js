import createRandomInt from './createRandomInt';

const createRandomRGB = () => {
	const R = createRandomInt(255);
	const G = createRandomInt(255);
	const B = createRandomInt(255);
	
	return `rgb(${R}, ${G}, ${B})`;
};

export default createRandomRGB;

