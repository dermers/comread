class AddReady < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :ready, :boolean
  end
end
