# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{username: 'trevor', name: 'tevors', email: 'stenson124@gmail.com', password: '123456', score: 0, ready: false},
             {username: 'gibby', name: 'gibbyf', email: 'gibby@gmail.com', password: '123456', score: 0, ready: false},
             {username: 'shawn', name: 'shawnd', email: 'shawn@gmail.com', password: '123456', score: 0, ready: false}])