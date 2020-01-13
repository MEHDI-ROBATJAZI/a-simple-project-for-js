const createRandomRGB = () => {
	const R = Math.floor(Math.random() * 255).toString();
	const G = Math.floor(Math.random() * 255).toString();
	const B = Math.floor(Math.random() * 255).toString();
	
	return `rgb(${R}, ${G}, ${B})`;
};

export default createRandomRGB;

