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
  "arantxa-mendiharat" => 3,
  "be-part-does-a-students-decision-have-the-same-power-as-a-teachers" => 4,
  "coincidim-using-decidim-in-citizen-movements" => 5,
  "crowdfunding-memoria-historica-bien-comun" => 7,
  "culture-creativity-and-deliberation-methodologies" => 6,
  "democracy-is-fun" => 11,
  "democratic-funding" => 13,
  "digital-participation-gap" => 14,
  "españa-vacia-incendios" => 12,
  "indices-bootcamp-datathon" => 10,
  "ines-cheniour" => 2,
  "nature-sdg-in-goteo" => 8,
  "neo-sindicalism-laskellys-manteros-riders-jornaleras" => 16,
  "recovering-collaborative-governance-through-design-justice" => 15,
  "role-of-glams-misinformation" => 9,
  "vespertilio-homo" => 1
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
