class IncomesController < ApplicationController
    
    
    def show
        
        @incomes = Income.all
    
    end
        
    def index
        
        if current_user 

        else 
            redirect_to root_path

        end 
        
        
      @income = Income.new
    end
    
    
    def create
        @income = Income.new(income_params)
        if current_user
            @income.username = current_user.username
         end
        
        
        if @income.save
            redirect_to welcome_path
        else
            render "index"
        end
    
    end
    
      private def income_params
    params.require(:income).permit(:username, :amount, :date, :description)
  end
    
    
end







    
 
     
    
    
    
    
    
  