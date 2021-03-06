# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170921174127) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "country_weights", force: :cascade do |t|
    t.string   "country"
    t.decimal  "percent"
    t.integer  "etf_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "etfs", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "symbol"
    t.index ["symbol"], name: "index_etfs_on_symbol", using: :btree
  end

  create_table "histories", force: :cascade do |t|
    t.integer  "etf_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["etf_id"], name: "index_histories_on_etf_id", using: :btree
    t.index ["user_id"], name: "index_histories_on_user_id", using: :btree
  end

  create_table "holdings", force: :cascade do |t|
    t.string   "name"
    t.decimal  "weight"
    t.integer  "share_held"
    t.integer  "etf_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["etf_id"], name: "index_holdings_on_etf_id", using: :btree
  end

  create_table "sectors", force: :cascade do |t|
    t.string   "name"
    t.decimal  "percent"
    t.integer  "etf_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["etf_id"], name: "index_sectors_on_etf_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "name"
    t.string   "email"
  end

end
