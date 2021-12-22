class ParkdetailsSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :description, :states, :contacts, :entrancefee, :directionsinfo, :directionsurl, :operatinghours, :addresses, :images, :weatherinfo, :trip_id, :user_id
end
