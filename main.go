package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Response struct {
	StatCode uint        `json:"stat_code"`
	StatMsg  string      `json:"stat_msg"`
	Data     interface{} `json:"data,omitempty"`
}

func main() {
	router := http.NewServeMux()

	router.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		rw.Header().Set("Content-Type", "application/json")

		res := Response{
			StatCode: http.StatusOK,
			StatMsg:  "Golang application running using PM2",
		}

		json.NewEncoder(rw).Encode(&res)
	})

	err := http.ListenAndServe(":4000", router)

	if err != nil {
		log.Fatalf("Server listening error %v", err)
	} else {
		log.Print("Server listening on port: 4000")
	}
}
