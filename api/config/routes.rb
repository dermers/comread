Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, param: :_username
  put '/users_id/:_user_id', to: 'user#update_by_id', param: :_user_id
  post '/essay', to: 'essay#create'
  get '/essay/:_user_id', to: 'essay#show', param: :_user_id
  delete '/essay/:_user_id', to: 'essay#destroy', param: :_user_id
  get '/mychunks/:_reviewer_id', to: 'chunk#my_chunks', param: :_reviewer_id
  get '/reviewedchunks/:_user_id', to: 'chunk#show_all_reviewed', param: :_user_id
  get '/allchunks/:_user_id', to: 'chunk#show_all', param: :_user_id
  post 'chunkrating/:_chunk_id', to: 'chunk#update_ranking', param: :_chunk_id
  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'
end
