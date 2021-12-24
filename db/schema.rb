# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_24_001330) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "packinglists", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.bigint "trip_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_packinglists_on_trip_id"
    t.index ["user_id"], name: "index_packinglists_on_user_id"
  end

  create_table "parkdetails", force: :cascade do |t|
    t.string "fullname"
    t.string "description"
    t.string "states"
    t.string "contacts"
    t.string "entrancefee"
    t.string "directionsinfo"
    t.string "directionsurl"
    t.string "operatinghours"
    t.string "addresses"
    t.string "images"
    t.string "weatherinfo"
    t.bigint "trip_id"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_parkdetails_on_trip_id"
    t.index ["user_id"], name: "index_parkdetails_on_user_id"
  end

  create_table "parks", force: :cascade do |t|
    t.string "data"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "trips", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "usertrips", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "trip_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_usertrips_on_trip_id"
    t.index ["user_id"], name: "index_usertrips_on_user_id"
  end

end
