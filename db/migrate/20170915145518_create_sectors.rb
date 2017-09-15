class CreateSectors < ActiveRecord::Migration[5.0]
  def change
    create_table :sectors do |t|
      t.string :name
      t.decimal :percent
      t.integer :etf_id

      t.timestamps
    end

    add_index :sectors, :etf_id
  end
end
