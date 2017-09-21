class CreateHistories < ActiveRecord::Migration[5.0]
  def change
    create_table :histories do |t|
      t.integer :etf_id
      t.integer :user_id
      t.timestamps
    end

    add_index :histories, :etf_id
    add_index :histories, :user_id
  end
end
