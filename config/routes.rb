Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :usertrips, only: [:index,:show,:create, :destroy]
    resources :trips, only: [:index, :show, :create, :update, :destroy]
    resources :parkdetails, only: [:index, :show, :create, :update, :destroy]
    resources :packinglists, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:index, :create, :destroy]
    # Routing logic: fallback requests for React Router.
    # Leave this here to help deploy your app later!
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"
    post '/signup', to: "users#create"
    get "/me", to: "users#show"
  end

end
