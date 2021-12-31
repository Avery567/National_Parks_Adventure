class Api::UsersController < ApplicationController
    skip_before_action :is_authenticated, only: [:create, :show]

    def index
        users = User.all
        render json: users
    end

    def show 
        if current_user
            render json: current_user, status: :ok
        else 
            render json: "Not authenticated", status: :unauthorized
        end 
    end

    def create 
        user = User.create(user_params)

        if user.valid?
            # NewUserEmailMailer.with(user: current_user).notify_user.deliver_now
            session[:user_id] = user.id
            render json: user, status: :created 
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity 
        end 
    end

    def destroy 
        user = User.find_by(id: params[:id])
        if user 
            user.destroy
            head :no_content 
        else  
            render json: { errors: ["User does not exist"]}, status: :not_found 
        end
    end

    private 

    def user_params 
        params.permit(:username, :email, :password, :password_confirmation)
    end

end
