Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :etfs, only: [:index, :show, :create]
  end
end
