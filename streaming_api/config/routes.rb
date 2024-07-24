# frozen_string_literal: true

Rails.application.routes.draw do
  resources :pexels, only: %i[index show]
  post 'login', to: 'authentication#login'
  get 'authorize_user', to: 'authentication#authorize_user'
  get 'token_validation', to: 'authentication#token_validation'
end
