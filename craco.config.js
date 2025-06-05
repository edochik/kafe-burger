const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@shared': path.resolve(__dirname, 'src/shared'),
			'@entities': path.resolve(__dirname, 'src/entities'),
			'@widgets': path.resolve(__dirname, 'src/widgets'),
			'@features': path.resolve(__dirname, 'src/features'),
			'@app': path.resolve(__dirname, 'src/app'),
		},
	},
};