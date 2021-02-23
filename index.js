const { spawn } = require('child_process');

module.exports = function (text, file, cb) {
	var output = "";
	var error = "";

	const grep = spawn('grep', [text, file]);

	grep.stdout.on('data', (data) => {
		output += data;
	});

	grep.stderr.on('data', (data) => {
		error = data;
	});

	grep.on('error', (error) => {
		
	});
	
	grep.on('close', (code) => {
		if (code !== 0) {
			switch (code) {
				case 1:
					error = "text not found";
					break;
					
				case -4058:
					error = "missing grep from OS.  Windows?";
					break;
					
				default:

			}

			cb({error: error, code: code}, null);
		} else {
			cb(null, output);
		}
	});
}