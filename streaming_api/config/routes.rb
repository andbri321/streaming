Rails.application.routes.draw do
  resources :pexels, only: [:index, :show]
end
