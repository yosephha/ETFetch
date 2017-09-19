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

      scraped_data = EtfScraper.scrape('http://us.spdrs.com/en', sym)

      etf = create_etf(scraped_data, sym)
      create_holdings(scraped_data[:holdings], etf.id)
      create_sectors(scraped_data[:sectors], etf.id)


      @etf = Etf.where(symbol: sym).first
      render :show
    end
  end

  private
  def user_params
    params.require(:etf).permit(:symbol)
  end

  def create_etf(scraped_data, sym)
    Etf.create(
      name: scraped_data[:name],
      description: scraped_data[:description],
      symbol: sym
    )
  end

  def create_holdings(holdings, id)
    holdings.each do |holding|
      Holding.create(
        name: holding[:name],
        weight: holding[:weight],
        share_held: holding[:shares],
        etf_id: id
      )
    end
  end

  def create_sectors(sectors, id)
    sectors.each do |sector|
      Sector.create(
        name: sector[:name],
        percent: sector[:percent],
        etf_id: id
      )
    end
  end

end
