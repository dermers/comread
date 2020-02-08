class AddIndexChangeRelation < ActiveRecord::Migration[6.0]
  def change
    add_column :chunks, :index, :integer
    rename_column :chunks, :essay_id, :user_id
  end
end
