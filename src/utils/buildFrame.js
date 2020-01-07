const buildFrame = ({
	maxSize,
	frameFormat
}) => {    
	const R = Math.floor(Math.random() * 255).toString();
	const G = Math.floor(Math.random() * 255).toString();
	const B = Math.floor(Math.random() * 255).toString();
	const color = `rgb(${R}, ${G}, ${B})`;

	const size = Math.floor(Math.random() * maxSize);

	const left = Math.floor(Math.random() * ( window.innerWidth - size ));
	const bottom = Math.floor(Math.random() * ( window.innerHeight - size  ));

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
