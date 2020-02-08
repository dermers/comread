class AddSubmittedToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :submitted, :boolean
  end
end
