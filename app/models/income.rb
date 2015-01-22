class Income < ActiveRecord::Base
    
    
        
    validates :amount, :date, :description, :presence => true
    
  validates :amount, numericality: true
    

    
    
    
end
