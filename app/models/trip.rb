class Trip < ApplicationRecord
    has_many :parkdetails, dependent: :destroy
    has_many :packinglists, dependent: :destroy
    has_many :usertrips, dependent: :destroy
    has_many :users, through: :usertrips
end


