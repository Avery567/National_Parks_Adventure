class Api::UsertripsController < ApplicationController

    def index
        usertrips = Usertrip.all
        render json: usertrips
    end
    
    def show 
        usertrip = Usertrip.find(params[:id])
        render json: usertrip
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

    def destroy 
        usertrip = Usertrip.find_by(id: params[:id])
        if usertrip 
            usertrip.destroy
            head :no_content 
        else  
            render json: { errors: ["Usertrip does not exist"]}, status: :not_found 
        end
    end

    private 

    def usertrip_params 
        params.permit(:user_id, :trip_id)
    end

end
