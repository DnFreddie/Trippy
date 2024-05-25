package main

// import "trippy_back/generator"
import (
	"log/slog"
	"net/http"
	"os"
	"trippy_back/database"
	"trippy_back/routes"

	"github.com/labstack/echo/v4"
)

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stdout, nil))
	slog.SetDefault(logger)
	db := database.CreateDbConn()
	if err := database.CreateSchema(db, []interface{}{&database.ChallengeField{}}, false); err != nil {
		slog.Error("Error creating schema:", err)
	} else {
	}
	// err := database.AddChalange(db)
	// if err != nil{
	// slog.Warn("Can't add chalange")
	// }
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.GET("/challenge", func(c echo.Context) error {
		return routes.GetChalanges(c, db)
	})
	e.POST("/add", func(c echo.Context) error {
		var p []database.ChallengeField
		err := c.Bind(&p)

		if err != nil {
			slog.Error("Thsi is err ", err)
			return c.String(http.StatusBadRequest, "bad Request")
		}

		return routes.AddChalange(c, db, p)
	})

	e.Logger.Fatal(e.Start(":1323"))
	defer db.Close()
}
