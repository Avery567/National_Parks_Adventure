class PackinglistSerializer < ActiveModel::Serializer
  attributes :id, :name, :trip_id, :user_id
end
