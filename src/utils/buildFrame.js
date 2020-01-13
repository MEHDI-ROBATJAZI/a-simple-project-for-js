import createRandomRGB from './createRandomRGB';	
import createRandomInt from './createRandomInt';	

const buildFrame = ({
	maxSize,
	frameFormat
}) => {    
	const color = createRandomRGB();
	const size = createRandomInt(maxSize);
	const left = createRandomInt((window.innerWidth - size));
	const bottom = createRandomInt((window.innerHeight - size));

	const newFrameStyle = {
		color,
		left,
		bottom,
		height: size,
		width: size,
		borderRadius: (frameFormat === 'circle' ? '50%' : '0%')
	};

	return newFrameStyle;
};

export default buildFrame;
