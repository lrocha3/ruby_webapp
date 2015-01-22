class User < ActiveRecord::Base
    
    validates :username, :password, :email, :presence => true
    validates :username, :length => { :minimum =>3 }
    validates :username, :uniqueness => true
    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i}

    
end
