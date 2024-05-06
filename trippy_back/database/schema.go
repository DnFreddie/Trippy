package database

import (
	"github.com/go-pg/pg/v10"
	"github.com/go-pg/pg/v10/orm"
)

type ChallengeField struct {
	Id          string `json:"id"`
	Latitude    string `json:"latitude"`
	Description string `json:"description"`
}

func CreateSchema(db *pg.DB ,tables []interface{} ,temp bool) error {

	for _, model := range tables {
		err := db.Model(model).CreateTable(&orm.CreateTableOptions{
			IfNotExists: true,
			Temp:       temp,
		})
		if err != nil {
			return err
		}
	}
	return nil
}
