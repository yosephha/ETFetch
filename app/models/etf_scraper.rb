require 'open-uri'
require 'mechanize'

class EtfScraper < ApplicationRecord
  attr_accessor :agent

  def self.scrape(url, symbol)
    puts 'ScrAping...'

    @@agent = Mechanize.new
    page = @@agent.get(url)

    click_on('.pull-left .view-all') #now at https://us.spdrs.com/product
    click_on('.category_toggler:nth-child(3)')
    click_on('.category_toggler:nth-child(5)')

    page_link = @@agent.page.link_with(:text => EtfNames.sym_to_name[symbol]) #now we are on the correct page

    return nil if page_link.nil?

    page_link.click

    name = get_name(symbol)
    key_features = get_description

    click_on('.tabs li:nth-child(3) a')
    holdings = get_holdings
    country_weights = get_country_weights
    sectors = get_sectors(symbol)


    return {
      name: name,
      description: key_features,
      holdings: holdings,
      sectors: sectors,
      country_weights: country_weights
    }
  end

  def self.get_name(symbol)
    EtfNames.sym_to_name[symbol]
  end

  def self.get_holdings
    counter = 2
    holdings = []
    10.times do
      row = {}
      str = ".top-holdings:nth-child(1) tr:nth-child(#{counter}) td"
      @@agent.page.search(str).each_with_index do |e,i|
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
    holdings
  end

  def self.get_description
    @@agent.page.search('.keyfeatures li').map(&:text).join("\n")
  end

  def self.click_on(target)
    target_link = @@agent.page.at(target)
    @@agent.click(target_link)
  end

  def self.get_sectors(sym)
    sector_url = "https://www.spdrs.com/site-content/data/chart/#{sym}_FUND_SECTOR_ALLOCATION.xml"
    @@agent.get(sector_url)

    sectors = []
    labels = @@agent.page.search('label').map(&:text)
    percents = @@agent.page.search('rawValue').map(&:text).map(&:to_f)

    labels.each_with_index do |label, idx|
      sector = {}
      sector[:name] = label
      sector[:percent] = percents[idx]
      sectors << sector
    end
    sectors
  end

  def self.get_country_weights
    c_and_w = @@agent.page.search(".row+ .row .as-of+ table td").map(&:text)
    return [] if c_and_w.length == 0

    countries=[]
    weights=[]
    country_weights = []

    c_and_w.each_with_index do |el, idx|
      if idx.even?
        countries.push(el)
      else
        weights.push(el.to_f)
      end
    end

    countries.each_with_index do |country, idx|
      temp = {}
      temp[:country] = country
      temp[:percent] = weights[idx]
      country_weights << temp
    end
    country_weights
  end
end
