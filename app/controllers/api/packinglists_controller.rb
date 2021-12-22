class Api::PackinglistsController < ApplicationController

    def index
        packinglists = current_user.packinglists
        render json: packinglists
    end

    def show 
        packinglist = Packinglist.find(params[:id])
        render json: packinglist
    end

    def create 
        packinglist = Packinglist.create(packinglist_params)
        if packinglist.valid?
            render json: packinglist, status: :created 
        else 
            render json: packinglist.errors.full_messages, status: :unprocessable_entity 
        end 
    end

    def destroy 
        packinglist = Packinglist.find_by(id: params[:id])
        if packinglist 
            packinglist.destroy
            head :no_content 
        else  
            render json: "Item does not exist", status: :not_found 
        end
    end

    private 

    def packinglist_params 
        params.permit(:name, :user_id, :trip_id)
    end

end
