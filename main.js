const { exec } = require('node:child_process')

/**
 * @description bostraping function for running golang binary process
 */
;(() => {
	exec('./main', (err, res) => {
		if (!err) console.info(`Golang application success: ${res}`)
		else console.error(`Golang application error ${err}`)
	})
})()
