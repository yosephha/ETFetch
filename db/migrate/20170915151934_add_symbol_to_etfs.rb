class AddSymbolToEtfs < ActiveRecord::Migration[5.0]
  def change
    add_column :etfs, :symbol, :string
  end
end
