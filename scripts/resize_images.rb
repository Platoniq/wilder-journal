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
  "volumes/heroes": [4000, 2000],
  "volumes/social": [600, 600],
  "volumes/thumbnails": [600, 600],
  "articles/heroes": [2000, 2000],
  "articles/social": [600, 600],
  "articles/thumbnails": [600, 600]
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
