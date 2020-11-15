package main

import (
	"fmt"

	"github.com/jasonblanchard/di-messages/packages/go/di_messages/notebook"
	"github.com/jasonblanchard/di-messages/packages/go/di_messages/status"
	"google.golang.org/protobuf/proto"
)

func main() {
	// fmt.Println(notebook.Error_UNKNOWN)
	message := &notebook.ReadEntryResponse{
		TraceId: "123",
		Status:  &status.Status{},
	}
	output, err := proto.Marshal(message)

	if err != nil {
		panic(err)
	}

	fmt.Println(message.Status.Code)

	fmt.Println(output)
}
