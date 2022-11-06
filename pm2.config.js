module.exports = {
	apps: [
		{
			name: 'golang-app',
			script: 'main.js',
			watch: false,
			exec_mode: 'cluster',
			instances: 'max',
			max_memory_restart: '512M',
			listen_timeout: 4000,
			kill_timeout: 6000,
			combine_logs: true
		}
	]
}
