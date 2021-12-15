class Api::TripsController < ApplicationController

    def index
        trips = current_user.trips
        render json: trips
    end

    def show 
        trip = Trip.find(params[:id])
        render json: trip
    end

    def create 
        trip = Trip.create(trip_params)
        if trip.valid?
            render json: trip, status: :created 
        else 
            render json: trip.errors.full_messages, status: :unprocessable_entity 
        end 
    end

    def update
        trip = Trip.find_by(id: params[:id])
        if trip 
            trip.update(trip_params)
            render json:trip
        else  
            render json: { errors: ["Trip does not exist"]}, status: :not_found 
        end
    end

    def destroy 
        trip = Trip.find_by(id: params[:id])
        if trip 
            trip.destroy
            head :no_content 
        else  
            render json: { errors: ["Trip does not exist"]}, status: :not_found 
        end
    end

    private 

    def trip_params 
        params.permit(:name)
    end
end
