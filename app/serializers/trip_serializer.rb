class TripSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :parkdetails
  has_many :users
  has_many :packinglists
end
