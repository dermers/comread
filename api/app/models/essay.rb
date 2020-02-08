class Essay < ApplicationRecord
    validates :user_id, presence: true, uniqueness: true
    validates :body, presence: true

    after_save :distribute

    private

    def distribute
      chunk_bodies = body.split(/(?<=[?.!])/)
      i = 0
      chunk_bodies.each do |chunk_body|
        r_id = User.offset(rand(User.count)).first.id
        while r_id == user_id
            r_id = User.offset(rand(User.count)).first.id
        end    
        Chunk.create(
            user_id: user_id,
            body: chunk_body,
            reviewer_id: r_id,
            index: i
        )
        i += 1
      end
    end    
end
