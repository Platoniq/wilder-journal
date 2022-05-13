#!/usr/bin/env/ruby
# frozen_string_literal: true
#
# This ruby script is to create the front matter files which contain
# the data for each sticker, given a sticker folder with .png images.
#
# Usage: 
# `ruby scripts/create_sticker_collection.rb 1 media/stickers/wilder-journal-1/ _stickers/`
#
#
# Example source directory: `media/stickers/wilder-journal-1/`
# Example target directory: `_stickers/en/`
#
# Example output:
# ```
#
# ---
# volume-uid: wilder-journal-0
# uid: wilder-journal-1_sticker-1
# path: /media/stickers/wilder-journal-0/sticker-1.png
# emoji: 🏳️ (Check https://unicode.org/emoji/charts/full-emoji-list.html)
# name: Fill in with sticker description
# ---
#
# ```
#
volume_number = ARGV[0]
source_directory = ARGV[1]
target_directory = ARGV[2]

puts "JOURNAL VOLUME: #{volume_number}"
puts "SOURCE: #{source_directory}"
puts "TARGET: #{target_directory}"

Dir.foreach(source_directory) do |filename|
  next if (filename == ".") || (filename == "..")

  basename = File.basename(filename, ".png")
  volume_uid = "wilder-journal-#{volume_number}"
  uid = "#{volume_uid}-#{basename}"

  # Default locale 
  content = <<~CONTENT
    ---
    volume-uid: #{volume_uid}
    uid: #{uid}
    path: /media/stickers/#{volume_uid}/#{filename}
    emoji: 🏳️
    name: Fill in with sticker description
    ---
  CONTENT
  
  File.write(File.join(target_directory, "es/", "#{uid}.md"), content)
  
  # Other locales
  %w(en).each do |locale|
    content = <<~CONTENT
      ---
      volume-uid: #{volume_uid}
      uid: #{uid}
      path: /media/stickers/#{volume_uid}/#{filename}
      name: Fill in with sticker description
      ---
    CONTENT
    
    File.write(File.join(target_directory, "#{locale}/", "#{uid}.md"), content)
  end
end
