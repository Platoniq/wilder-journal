#!/usr/bin/env/ruby
# frozen_string_literal: true
#
# This ruby script is to sort articles
#
# Usage: 
# `ruby scripts/sort_articles.rb`
# ```
#

LOCALES = %w(es en)

ARTICLES = {
  "editorial" => 1,
  "vespertilio-homo" => 2,
  "arantxa-mendiharat" => 3,
  "democratic-funding" => 4,
  "culture-creativity-and-deliberation-methodologies" => 5,
  "role-of-glams-misinformation" => 6,
  "digital-participation-gap" => 7,
  "recovering-collaborative-governance-through-design-justice" => 8,
  "ines-cheniour" => 9,
  # oliver escobar => 10,
  "storytelling" => 11,
  "nature-sdg-in-goteo" => 12,
  "ahmed" => 13,
  "precious" => 14,
  "neo-sindicalism-laskellys-manteros-riders-jornaleras" => 15,
  "we-the-internet" => 16,
  "democracy-is-fun" => 17,
  "emptied-rural-spain" => 18,
  "be-part-does-a-students-decision-have-the-same-power-as-a-teachers" => 19,
  "indices-bootcamp-datathon" => 20,
  "coincidim-using-decidim-in-citizen-movements" => 21,
  "crowdfunding-memoria-historica-bien-comun" => 22
}

ARTICLES.each_pair do |article, order|
  puts ""
  puts "article: #{article}"
  
  LOCALES.each do |locale|
    filename = "_articles/#{locale}/#{article}.md"

    content = File.read(filename)
    
    regex = /article\-order: (\d+)/
    
    puts "filename: #{filename}; current order: #{content.match(regex)}; desired order: #{order}"

    content.gsub!(regex, "article-order: #{order}")
    
    File.write(filename, content)
  end
end
