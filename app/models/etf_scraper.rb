require 'open-uri'
class EtfScraper < ApplicationRecord

  def self.scrape(url)
    puts 'ScrAping...'
    doc = Nokogiri::HTML(open(url))
    puts doc.at_css("title").text

    # Etf.save({...})
  end
end
