Rails.application.routes.draw do

  namespace :api do
    resources :usertrips, only: [:index,:show,:create, :destroy]
    resources :trips, only: [:index, :show, :create, :update, :destroy]
    resources :parkdetails, only: [:index, :show, :create, :update, :destroy]
    resources :packinglists, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:index, :create, :destroy]
    # Routing logic: fallback requests for React Router.
    # Leave this here to help deploy your app later!
    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"
    post '/signup', to: "users#create"
    get "/me", to: "users#show"
    get '/parks', to: "parks#get_parks"
    resource :parks
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  end

end
