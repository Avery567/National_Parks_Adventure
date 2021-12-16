class CreateUsertrips < ActiveRecord::Migration[6.1]
  def change
    create_table :usertrips do |t|
      t.references :user
      t.references :trip

      t.timestamps
    end
  end
end
