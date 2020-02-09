class Essay < ApplicationRecord
    validates :user_id, presence: true, uniqueness: true
    validates :body, presence: true

    after_save :distribute

    private

    def distribute
      chunk_bodies = body.split(/(?<=[?.!])/)
      i = 0
      chunk_bodies.each do |chunk_body|
        r = User.offset(rand(User.count)).first
        while r.id == user_id || r.ready
            r = User.offset(rand(User.count)).first
        end    
        Chunk.create(
            user_id: user_id,
            body: chunk_body,
            reviewer_id: r.id,
            index: i,
            rating: false
        )
        i += 1
      end
    end    
end
