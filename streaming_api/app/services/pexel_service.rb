# frozen_string_literal: true

class PexelService < ApplicationService
  attr_reader :message

  def initialize(params)
    @params = params
  end

  def call
    search_exist?
    call_client
  rescue Pexels::APIError => e
    { 'error': "#{e.message} on Pexels" }
  rescue ArgumentError => e
    { 'error': e.message }
  end

  private

  def search_exist?
    { 'error': 'search parameter is mandatory' } if @params[:search].nil?
  end

  def call_client
    if @params[:id]
      response = client.videos.find(@params[:id])
      { 'data': response }
    else
      @movies = search_videos
      @total_pages = @movies.total_pages
      pexel_serializer
    end
  end

  def search_videos
    client.videos.search(
      @params[:search],
      size: @params[:size],
      page: @params[:page],
      per_page: @params[:per_page]
    )
  end

  def pexel_serializer
    @movies_serializer = PexelSerializer.new(@movies).serializable_hash[:data]&.map { |i| i[:attributes] }
    { 'data': { 'movies': @movies_serializer, 'meta': meta } }
  end

  def meta
    page = @params[:page].to_i
    next_page = page == @total_pages ? nil : page + 1
    prev_page = page == 1 ? nil : page - 1
    per_page = @params[:per_page].to_i

    meta_json(page, next_page, prev_page, per_page)
  end

  def meta_json(page, next_page, prev_page, per_page)
    {
      "current_page": page,
      "prev_page": prev_page,
      "next_page": next_page,
      "per_page": per_page,
      "total_pages": @total_pages
    }
  end

  def client
    Pexels::Client.new('HFH0V470wU3S0m7XMGQlRclTU4BaV1YAY4tyOgareQebtghiYBuPYota')
  end
end
