class AddRatingToChunks < ActiveRecord::Migration[6.0]
  def change
    add_column :chunks, :rating, :boolean
  end
end
