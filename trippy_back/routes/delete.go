package routes

import (
	"fmt"
	"net/http"
	"trippy_back/database"

	"github.com/go-pg/pg/v10"
	"github.com/labstack/echo/v4"
)

func DelChalange(c echo.Context, db *pg.DB, id string ) error {
	err := database.DelteItem(db,database.ChallengeField{},id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, fmt.Sprintf("Cant' del the chalange %v",err))
	}

	return c.JSON(http.StatusOK, "The item has been deleted")
}
