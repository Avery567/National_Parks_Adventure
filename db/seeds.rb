# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker';

User.destroy_all
# Tab.destroy_all
# Usertab.destroy_all
# Item.destroy_all

(1..100).each do |id|
User.create!(
    username: Faker::Name.name,
    email: Faker::Internet.email,
    password: "Password123!!",
    password_confirmation: "Password123!!",
)

end

User.create!(
    username: "avery",
    email: "avery@gmail.com",
    password: "Password123!!",
    password_confirmation: "Password123!!",
)

puts "Done Seeding Users!"