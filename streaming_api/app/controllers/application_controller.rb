# frozen_string_literal: true

class ApplicationController < ActionController::API
  before_action :authenticate

  rescue_from JWT::VerificationError, with: :invalid_token
  rescue_from JWT::DecodeError, with: :invalid_token

  private

  def authenticate
    authorization_header = request.headers['Authorization']
    token = authorization_header.split(' ').last if authorization_header
    decoded_token = JsonWebToken.decode(token)

    User.find(decoded_token[:user_id])
  end

  def invalid_token
    render json: { error: 'jwt_auth_invalid_token' }, status: :unauthorized
  end
end
