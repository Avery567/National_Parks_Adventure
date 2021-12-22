class CreateParkdetails < ActiveRecord::Migration[6.1]
  def change
    create_table :parkdetails do |t|
      t.string :fullname
      t.string :description
      t.string :states
      t.string :contacts
      t.string :entrancefee
      t.string :directionsinfo
      t.string :directionsurl
      t.string :operatinghours
      t.string :addresses
      t.string :images
      t.string :weatherinfo
      t.references :trip
      t.references :user

      t.timestamps
    end
  end
end
