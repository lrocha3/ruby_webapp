class CreateIncomes < ActiveRecord::Migration
  def change
    create_table :incomes do |t|
      t.string :username
      t.string :amount
      t.string :date
      t.string :description

      t.timestamps null: false
    end
  end
end
