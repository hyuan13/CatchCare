Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  namespace :api do
    post 'user/token' => 'user_token#create'
    get 'users/current' => 'users#current'
    post 'users/signup' => 'users#signup'
  end
  resources :signup
  resources :login
end
