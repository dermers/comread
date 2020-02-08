class CreateChunks < ActiveRecord::Migration[6.0]
  def change
    create_table :chunks do |t|
      t.integer :essay_id
      t.text :body
      t.text :feedback
      t.integer :reviewer_id

      t.timestamps
    end
  end
end
