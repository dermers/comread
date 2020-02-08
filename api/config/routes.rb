Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, param: :_username
  post '/essay', to: 'essay#create'
  get '/essay/:_user_id', to: 'essay#show', param: :_user_id
  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'
end
