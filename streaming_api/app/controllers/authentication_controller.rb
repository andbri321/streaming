# frozen_string_literal: true

class AuthenticationController < ApplicationController
  skip_before_action :authenticate

  def login
    user = User.find_by(username: params[:username])
    authenticated_user = user&.authenticate(params[:password])

    if authenticated_user
      token = JsonWebToken.encode(user_id: user.id)
      expires_at = JsonWebToken.decode(token)[:exp]

      render json: { token:, expires_at: }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def authorize_user
    token = request.headers['Authorization']&.split(' ')&.last
    payload = JsonWebToken.decode(token)

    if payload.nil?
      render json: { error: 'Unauthorized' }, status: :unauthorized
    else
      @current_user = User.select(:id, :username, :email).find(payload['user_id'])
      render json: @current_user
    end
  end

  def token_validation
    token = request.headers['Authorization']&.split(' ')&.last
    payload = JsonWebToken.decode(token)

    if payload.nil?
      render json: { error: 'jwt_auth_invalid_token' }, status: :unauthorized
    else
      render json: { error: 'jwt_auth_valid_token' }
    end
  end
end
