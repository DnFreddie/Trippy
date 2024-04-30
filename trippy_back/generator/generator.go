package generator

import (
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"os"
)

func GenerateQuestions(path string) {
	// Read file contents
	f, err := os.ReadFile(path)
	if err != nil {
		log.Fatal(err)
	}

	var data map[string][]string
	result := make([]int, 0, 6)

	err = json.Unmarshal(f, &data)
	if err != nil {
		log.Fatal(err)
	}

	challenges := data["challenges"]

	rQuestions := make(map[int]bool)
	final_set := make([]string, 0, 6)

	for len(rQuestions) < 6 {
		newInt := rand.Intn(49)
		if _, exists := rQuestions[newInt]; !exists {
			rQuestions[newInt] = true
			result = append(result, newInt)

		}
	}

	for _, s := range result {
		final_set = append(final_set, challenges[s])
	}

	fmt.Println(final_set)
}
