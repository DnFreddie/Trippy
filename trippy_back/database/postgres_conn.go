package database

import (
	"fmt"
	"log/slog"

	"github.com/go-pg/pg/v10"
)

func CreateDbConn() *pg.DB {
	db := pg.Connect(&pg.Options{
		User:     "admin",
		Password: "password",
	})
	return db
}

func InsertItem[T any](db *pg.DB ,data T) error {
slog.Info("this is data ",data)
	_, err := db.Model(&data).Insert()
	fmt.Println(data)
	if err != nil {
		slog.Error("Error inserting the chalange", err)
		return err
	}
	slog.Info("the item was successfully added", "item", fmt.Sprintf("%+v", data))

	return nil
}

func Query[T any](db *pg.DB, data T, query string) ([]T, error) {
	var result []T
	var err error

	if query == "" {
		err = db.Model(&result).Select()
	} else {
		_, err = db.Query(&result, query) 
	}

	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	return result, nil
}

