package routes

import (
	"net/http"
	"trippy_back/database"
	"github.com/go-pg/pg/v10"
	"github.com/labstack/echo/v4"
)

func GetChalanges(c echo.Context, db *pg.DB) error {
	ch, err := database.Query(db,database.ChallengeField{},"")
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, ch)
}
