class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
    has_secure_password 

    has_many :parkdetails
    has_many :packinglists
    has_many :usertrips
    has_many :trips, through: :usertrips


    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, confirmation: true, length: { in: 10..30 }

    validate :password_lower_case
    validate :password_uppercase
    validate :password_special_char
    validate :password_contains_number
  
    def password_uppercase
      return if !!password.match(/\p{Upper}/)
      errors.add :password, ' must contain at least 1 uppercase '
    end
  
    def password_lower_case
      return if !!password.match(/\p{Lower}/)
      errors.add :password, ' must contain at least 1 lowercase '
    end
  
    def password_special_char
      special = "?<>',?[]}{=-)(*&^%$#`~{}!"
      regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
      return if password =~ regex
      errors.add :password, ' must contain special character'
    end
  
    def password_contains_number
      return if password.count("0-9") > 0
      errors.add :password, ' must contain at least one number'
    end
end
