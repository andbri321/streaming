# frozen_string_literal: true

class PexelSerializer
  include JSONAPI::Serializer

  attributes :id, :height, :width, :duration, :user_name, :video_files, :video_pictures

  attribute :user_name do |movie, _params|
    movie.user.name
  end

  attribute :video_files do |movie, _params|
    movie.files
  end

  attribute :video_pictures do |movie, _params|
    movie.pictures
  end
end
