require 'rake'
Rake::Task.clear
ETFetch::Application.load_tasks


class Api::EtfsController < ApplicationController

  def index
    @etfs = Etf.all
  end

  def show
    sym = params[:id]
    @etf = Etf.where(symbol: sym).first
    if @etf
      render :show
    else
      # scraper = EtfScraper.new
      scraped_data = EtfScraper.scrape('http://us.spdrs.com/en', sym)
      # scraped_data = scraper.scrape('http://us.spdrs.com/en', sym)

      etf = Etf.create(
        name: scraped_data[:name],
        description: scraped_data[:description],
        symbol: sym
      )

      scraped_data[:holdings].each do |holding|
        Holding.create(
          name: holding[:name],
          weight: holding[:weight],
          share_held: holding[:shares],
          etf_id: etf.id
        )
      end
      @etf = Etf.where(symbol: sym).first
      render :show
    end
  end

  private
  def user_params
    params.require(:etf).permit(:symbol)
  end
end
