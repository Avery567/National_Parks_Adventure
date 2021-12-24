class CreatePackinglists < ActiveRecord::Migration[6.1]
  def change
    create_table :packinglists do |t|
      t.string :name
      t.references :user
      t.references :trip

      t.timestamps
    end
  end
end
