# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{username: 'trevor', name: 'tevors', email: 'stenson124@gmail.com', password: '123456', score: 0, ready: false},
             {username: 'gibby', name: 'gibbyf', email: 'gibby@gmail.com', password: '123456', score: 0, ready: false},
             {username: 'shawn', name: 'shawnd', email: 'shawn@gmail.com', password: '123456', score: 0, ready: false},
             {username: 'nithin', name: 'nithin', email: 'nithin@yahoo.com', password: '123456', score: 5, ready: true}])

20.times do |x|
    Chunk.create([{user_id: 2, body: "this is the #{x} feedback entry from gibby.", feedback: nil,
                  reviewer_id: 1, created_at: DateTime.parse("02/07/20 5:0#{x}", 
                  updated_at: DateTime.parse("02/07/20 5:0#{x}"), index: x, rating: false)}])
end