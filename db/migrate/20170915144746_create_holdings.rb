class CreateHoldings < ActiveRecord::Migration[5.0]
  def change
    create_table :holdings do |t|
      t.string :name
      t.decimal :weight
      t.integer :share_held
      t.integer :etf_id

      t.timestamps
    end

    add_index :holdings, :etf_id
  end
end
