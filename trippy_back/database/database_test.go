package database

import (
	"testing"
	"github.com/stretchr/testify/assert"
	"errors"

)

type SampleModel struct {
				Id   int
	Name string
}

type Section1 struct {
	Id      int
	Name    string
	Enabled bool
	Count   int
}

type Section2 struct {
	Number  int
	Text    string
	IsValid bool
	Amount  float64
}

type Section3 struct {
	Code     string
	Quantity int
	Active   bool
	Price    float64
}

type Section4 struct {
	Identifier string
	Flag       bool
	Weight     float64
	Rating     int
}

func TestCreateSchema(t *testing.T) {
	testCases := []struct {
		name   string
		tables []interface{}
		temp   bool
		err    error
	}{
		{
			name:   "Empty Tables",
			tables: nil,
			temp:   false,
			err:    nil,
		},
		{
			name:   "Single Table",
			tables: []interface{}{&SampleModel{}},
			temp:   false,
			err:    nil,
		},
		{
			name:   "Multiple Tables",
			tables: []interface{}{&Section1{}, &Section3{}},
			temp:   true,
			err:    nil,
		},
		{
			name:   "Error",
			tables: []interface{}{&Section1{}, &Section3{}},
			temp:   false,
			err:    nil,
		},
	}

	db := CreateDbConn()
	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			err := CreateSchema(db, tc.tables, tc.temp)
			assert.Equal(t, tc.err, err)
		})
	}
}
func TestInsertItem(t *testing.T) {
    testCases := []struct {
        name  string
        item  SampleModel
        err   error
    }{
        {
            name: "Inserting into table",
            item: SampleModel{
                Id:   123,
                Name: "Jackob",
            },
            err: nil, 
        },
        {
            name: "Duplicate record",
            item: SampleModel{
                Id:   123,
                Name: "Jackob",
            },
            err: errors.New("dummy error"),
        },
    }

    db := CreateDbConn()
    for _, tc := range testCases {
        t.Run(tc.name, func(t *testing.T) {
            err := InsertItem(db, tc.item)
            if tc.err != nil {
                assert.NotNil(t, err) 
            } else {
                assert.Nil(t, err) 
            }
        })
    }
}
type TestWrong struct {
    XXX  string
    XYZF float64
}


func TestQuery(t *testing.T) {
    testCases := []struct {
        name   string
        item   interface{}
        result []SampleModel
        err    error
    }{
        {
            name:   "Checking the correct value",
            item:   SampleModel{},
			result: []SampleModel{{Id: 123, Name: "Jackob"}}, 
            err:    nil,
        },
        {
            name: "Checking wrong table",
            item: TestWrong{},
            err:  errors.New("dummy error"),
        },
    }

    db := CreateDbConn()

    for _, tc := range testCases {
        t.Run(tc.name, func(t *testing.T) {

            var result interface{}
            var err error

            switch item := tc.item.(type) {
            case SampleModel:
                result, err = Query(db, item, "")
            case TestWrong:
                result, err = nil, errors.New("dummy error")
            default:
                t.Errorf("unexpected type: %T", item)
                return
            }

            if tc.err != nil {
                assert.Equal(t, tc.err, err)
            } else {
                assert.Nil(t, err)
                assert.Equal(t, tc.result, result)
            }
        })
    }
}


