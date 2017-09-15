class AddIndexToEtfs < ActiveRecord::Migration[5.0]
  def change
    add_index :etfs, :symbol
  end
end
