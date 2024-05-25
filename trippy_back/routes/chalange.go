package routes

import (
	"github.com/go-pg/pg/v10"
	"github.com/labstack/echo/v4"
	"net/http"
	"trippy_back/database"
)

func GetChalanges(c echo.Context, db *pg.DB) error {
	ch, err := database.Query(db, database.ChallengeField{}, "")
	if err != nil {
		return c.JSON(http.StatusBadRequest, "lol")
	}

	return c.JSON(http.StatusOK, ch)
}
