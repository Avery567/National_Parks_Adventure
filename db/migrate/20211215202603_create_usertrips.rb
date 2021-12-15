class CreateUsertrips < ActiveRecord::Migration[6.1]
  def change
    create_table :usertrips do |t|
      t.reference :user
      t.reference :trip

      t.timestamps
    end
  end
end
