#!/usr/bin/env/ruby
# frozen_string_literal: true
#
# This ruby script is to resize images to maximum width and height
# mainly for optimization purposes
#
# Usage: 
# `ruby scripts/resize_images.rb`
# ```
#
require "mini_magick"
require "image_optim"

SIZES = {
  "volumes/heroes": [3840, 1920],
  "volumes/mobile": [1920, 1080],
  "volumes/social": [540, 540],
  "volumes/thumbnails": [540, 540],
  "articles/heroes": [1920, 1920],
  "articles/mobile": [1920, 1080],
  "articles/social": [540, 540],
  "articles/thumbnails": [540, 540],
}

SIZES.each_pair do |path, size|
  fullpath = File.join("./media/", path.to_s)
  images = Dir.glob(File.join(fullpath, "*.{png,jpeg}"))

  puts ">>> [Resizing] images in directory: #{path}; max size: #{size};"

  images.each do |filename|
    puts "  > filename: #{filename};"

    image = MiniMagick::Image.open(filename)
    image.resize size.join("x") + ">"
    image.write filename
  end
end
