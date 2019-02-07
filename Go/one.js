package main
import (
	"fmt";
	"strings"
)

func LetterCapitalize(str string) string {
	var last = ``
	var newStr = ``
	for _, currentRune := range str {
		var current = string(currentRune)
		if ( last == ` ` ) {
			newStr += strings.ToUpper(current)
		} else {
			newStr+= current
		}
		last = current
	}
	return newStr
}



func main() {
  fmt.Println(LetterCapitalize(readline()))

}
