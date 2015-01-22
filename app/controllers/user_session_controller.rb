class UserSessionController < ApplicationController
    
    def new
    end
    
    def create
       user = User.authenticate(params[:username],params[:password])
           if @user.nil?
               
               else
           redirect_back_or_to(user_path, message: "Esta logado!")
            
       end
    end
    
end
