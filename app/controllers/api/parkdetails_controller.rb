class Api::ParkdetailsController < ApplicationController

    def index
        parkdetails = current_user.parkdetails
        render json: parkdetails
    end

    def show 
        parkdetail = Parkdetail.find(params[:id])
        render json: parkdetail
    end

    def create 
        parkdetail = Parkdetail.create(parkdetail_params)
        if parkdetail.valid?
            render json: parkdetail, status: :created 
        else 
            render json: parkdetail.errors.full_messages, status: :unprocessable_entity 
        end 
    end

    def destroy 
        parkdetail = Parkdetail.find_by(id: params[:id])
        if parkdetail 
            parkdetail.destroy
            head :no_content 
        else  
            render json: "Item does not exist", status: :not_found 
        end
    end

    private 

    def parkdetail_params 
        params.permit(:fullname, :description, :states, :contacts, :entrancefee, :directionsinfo, :directionsurl, :operatinghours, :addresses, :images, :weatherinfo, :trip_id)
    end
end
