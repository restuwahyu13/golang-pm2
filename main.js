const { exec } = require('node:child_process')

/**
 * @description bostraping function for running golang binary process
 */
;(() => {
	exec('./main', (err, res) => {
		if (err) console.info(`Go app error ${err}`)
		console.info(`Go app success: ${res}`)
	})
})(
