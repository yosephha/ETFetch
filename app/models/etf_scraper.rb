require 'open-uri'
require 'mechanize'

class EtfScraper < ApplicationRecord

  def self.scrape(url, symbol)
    puts 'ScrAping...'
    agent = Mechanize.new

    page = agent.get(url)
    product_page = agent.page.at('.pull-left .view-all')
    agent.click(product_page) #now at https://us.spdrs.com/product

    uncollapse_global = agent.page.at('.category_toggler:nth-child(3)')
    agent.click(uncollapse_global)

    uncollapse_us = agent.page.at('.category_toggler:nth-child(5)')
    agent.click(uncollapse_us)

    agent.page.link_with(:text => EtfNames.sym_to_name[symbol]).click #now we are on the correct page

    name = EtfNames.sym_to_name[symbol]
    key_features = agent.page.search('.keyfeatures li').map(&:text).join("\n")

    about_link = agent.page.at('.tabs li:nth-child(3) a')
    agent.click(about_link)

    # --------------------Holdings------------------------------
    counter = 2
    holdings = []
    10.times do
      row = {}
      str = ".top-holdings:nth-child(1) tr:nth-child(#{counter}) td"
      agent.page.search(str).each_with_index do |e,i|
        if i == 0
         row[:name] = e.text
        elsif i==1
         row[:weight] = e.text.to_f
        elsif i==2
         row[:shares] = e.text.split(',').join.to_i
        end
      end

      holdings << row
      counter += 1
    end

    puts '*' * 40
    puts
    puts name
    puts key_features
    puts
    holdings.each do |row|
      puts "#{row[:name]} ----- #{row[:weight]} ----- #{row[:shares]}"
    end

    puts '*' * 40
    puts
    return {name: name, description: key_features, holdings: holdings}
  end
end
