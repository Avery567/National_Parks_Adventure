class Api::ParksController < ApplicationController
    skip_before_action :is_authenticated

    require 'rest-client'

    def get_parks
        apikey=ENV["REACT_APP_NATIONAL_PARKS_API_KEY"]
        parksdata = RestClient.get("https://developer.nps.gov/api/v1/parks?limit=465&api_key=#{apikey}")
    # binding.pry
        render json: parksdata
    
    end

end


