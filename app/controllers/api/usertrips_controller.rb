class Api::UsertripsController < ApplicationController

    def index
        usertrips = Usertrip.all
        render json: usertrips
    end
    
    def create 
        usertrip = Usertrip.create(usertrip_params)
        if usertrip.valid?
            session[:usertrip_id] = usertrip.id
            render json: usertrip, status: :created 
        else 
            render json: { errors: usertrip.errors.full_messages }, status: :unprocessable_entity 
        end 
    end

    private 

    def usertrip_params 
        params.permit(:user_id, :trip_id)
    end

end
