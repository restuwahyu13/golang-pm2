const { exec } = require('node:child_process')
const { promisify } = require('node:util')

/**
 * @description bostraping function for running golang binary process
 */

;(async () => {
 try {
   const execPromise = promisify(exec)
   const res = await execPromise('./main')
   if (!res.stderr) console.info(`Go app success ${err}`)
 } catch (e) {
   console.error(`Go app error: ${res}`)
   Promise.reject(e)
 }
})()
