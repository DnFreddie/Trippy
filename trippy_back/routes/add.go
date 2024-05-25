package routes

import (
	"fmt"
	"log/slog"
	"net/http"
	"trippy_back/database"

	"github.com/go-pg/pg/v10"
	"github.com/labstack/echo/v4"
)

func AddChalange(c echo.Context, db *pg.DB, data []database.ChallengeField) error {

	for _, ch := range data {

		slog.Info("info xdddd")

		err := database.InsertItem(db, ch)

		fmt.Println(ch)
		if err != nil {
			fmt.Println(err)
			return c.JSON(http.StatusInternalServerError, "error adding the item")
		}

	}
	return c.JSON(http.StatusOK, "success")
}
