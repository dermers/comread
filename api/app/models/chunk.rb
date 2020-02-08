class Chunk < ApplicationRecord
    validates :essay_id, presence: true
    validates :body, presence: true
end
