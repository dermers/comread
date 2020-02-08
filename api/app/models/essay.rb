class Essay < ApplicationRecord
    validates :user_id, presence: true, uniqueness: true
    validates :body, presence: true
end
