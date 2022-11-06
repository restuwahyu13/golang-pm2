# Golang PM2

Example running golang application using pm2, if you don't want to use this concept, alternative you can use this [pm2go](https://github.com/struCoder/pmgo) or [pm2-io-apm-go](https://github.com/keymetrics/pm2-io-apm-go).

# Notes Important!

If you found error like this, when you run command `docker logs <container id>` ignore this error, make sure your app is running or not typing command `docker exec -it <container id> sh` in your terminal and if you already inside container typing command like this `pm2 ls` and `pm2 monit`, for make sure your app is running or check this article for resolve this issue [here](https://douglasmakey.medium.com/socket-sharding-in-linux-example-with-go-b0514d6b5d08).

```sh
[antimalware@antimalware go-pm2]$ docker logs 8e00
2022-11-06T08:12:42: PM2 log: Launching in no daemon mode
2022-11-06T08:12:42: PM2 log: App [golang-app:0] starting in -cluster mode-
2022-11-06T08:12:42: PM2 log: App [golang-app:0] online
2022-11-06T08:12:42: PM2 log: App [golang-app:1] starting in -cluster mode-
2022-11-06T08:12:42: PM2 log: App [golang-app:1] online
2022-11-06T08:12:42: PM2 log: App [golang-app:2] starting in -cluster mode-
2022-11-06T08:12:42: PM2 log: App [golang-app:2] online
2022-11-06T08:12:42: PM2 log: App [golang-app:3] starting in -cluster mode-
Golang application error Error: Command failed: ./main
2022/11/06 08:12:42 Server listening error listen tcp :4000: bind: address already in use
2022-11-06T08:12:42: PM2 log: App [golang-app:3] online
2022-11-06T08:12:42: PM2 log: App [golang-app:4] starting in -cluster mode-
2022-11-06T08:12:42: PM2 log: App [golang-app:4] online
2022-11-06T08:12:42: PM2 log: App [golang-app:5] starting in -cluster mode-
Golang application error Error: Command failed: ./main
2022/11/06 08:12:42 Server listening error listen tcp :4000: bind: address already in use
2022-11-06T08:12:42: PM2 log: App [golang-app:5] online
2022-11-06T08:12:42: PM2 log: App [golang-app:6] starting in -cluster mode-
Golang application error Error: Command failed: ./main
2022/11/06 08:12:42 Server listening error listen tcp :4000: bind: address already in use
2022-11-06T08:12:42: PM2 log: App [golang-app:6] online
2022-11-06T08:12:42: PM2 log: App [golang-app:7] starting in -cluster mode-
2022-11-06T08:12:42: PM2 log: App [golang-app:7] online
2022-11-06T08:12:42: PM2 log: App [golang-app:8] starting in -cluster mode-
Golang application error Error: Command failed: ./main
2022/11/06 08:12:42 Server listening error listen tcp :4000: bind: address already in use
2022-11-06T08:12:42: PM2 log: App [golang-app:8] online
2022-11-06T08:12:42: PM2 log: App [golang-app:9] starting in -cluster mode-
Golang application error Error: Command failed: ./main
2022/11/06 08:12:42 Server listening error listen tcp :4000: bind: address already in use
2022-11-06T08:12:42: PM2 log: App [golang-app:9] online
2022-11-06T08:12:42: PM2 log: App [golang-app:10] starting in -cluster mode-
Golang application error Error: Command failed: ./main
2022/11/06 08:12:42 Server listening error listen tcp :4000: bind: address already in use
2022-11-06T08:12:42: PM2 log: App [golang-app:10] online
2022-11-06T08:12:42: PM2 log: App [golang-app:11] starting in -cluster mode-
Golang application error Error: Command failed: ./main
2022/11/06 08:12:42 Server listening error listen tcp :4000: bind: address already in use
2022-11-06T08:12:43: PM2 log: App [golang-app:11] online
Golang application error Error: Command failed: ./main
2022/11/06 08:12:43 Server listening error listen tcp :4000: bind: address already in use
Golang application error Error: Command failed: ./main
2022/11/06 08:12:43 Server listening error listen tcp :4000: bind: address already in use
Golang application error Error: Command failed: ./main
2022/11/06 08:12:43 Server listening error listen tcp :4000: bind: address already in use
Golang application error Error: Command failed: ./main
2022/11/06 08:12:43 Server listening error listen tcp :4000: bind: address already in use
[antimalware@antimalware go-pm2]$ 
```
