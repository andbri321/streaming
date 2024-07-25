# frozen_string_literal: true

class PexelsController < ApplicationController
  before_action :call_pexel, only: %i[index show]
  skip_before_action :authenticate

  def index
    if @response[:data]
      render json: @response[:data]
    else
      render json: @response, status: :unprocessable_entity
    end
  end

  def show
    if @response[:data]
      render json: @response[:data]
    else
      render json: @response, status: :unprocessable_entity
    end
  end

  private

  def call_pexel
    @response = PexelService.call(params)
  end
end
