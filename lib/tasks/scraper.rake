namespace :scraper do
  desc "Scrapes Etf informations"
  task scrape: :environment do
    EtfScraper.scrape
  end

end
