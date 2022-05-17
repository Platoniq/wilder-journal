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

filter_name = nil
# filter_name = "ahmed.png"

SIZES.each_pair do |path, size|
  fullpath = File.join(ARGV[0] || "./media/", path.to_s)
  images = Dir.glob(File.join(fullpath, "*.{png,jpg,jpeg}"))

  puts ">>> [Resizing] images in directory: #{path}; max size: #{size};"

  
  images.each do |filename|
    next unless filter_name && filename.match?(filter_name)

    puts "  > filename: #{filename};"
    
    tmp = "#{filename}.tmp"

    File.rename(filename, tmp)

    image = MiniMagick::Image.open(tmp)
    image.resize "#{size.join("x")}>"
    image.write filename
  end
end
