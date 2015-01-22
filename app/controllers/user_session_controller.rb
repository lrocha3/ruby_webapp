class UserSessionController < ApplicationController
    
        
    def new
    end
    
    
    def create
      
       
         user = User.authenticate(params[:username], params[:password])
        
  if user
    session[:user_session_id] = user.id
redirect_to welcome_path
  else
      flash.now.alert = "Invalid email or password"
    render "new"
  end
            
            
            
    end
    
    
    def destroy
  session[:user_session_id] = nil
  redirect_to root_url
end
    
    
end
