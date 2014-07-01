class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name, null: false
      t.string :img_url
      t.integer :coins, default: 0
      t.timestamps
    end
  end
end
