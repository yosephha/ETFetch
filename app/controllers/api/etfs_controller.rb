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
      if current_user.etfs_visited_by_id.include?(@etf.id)
        render :show
      else
        record_history(@etf.id, current_user.id)
        render :show
      end
    else

      scraped_data = EtfScraper.scrape('http://us.spdrs.com/en', sym)

      if scraped_data
        etf = create_etf(scraped_data, sym)
        create_holdings(scraped_data[:holdings], etf.id)
        create_sectors(scraped_data[:sectors], etf.id)

        if scraped_data[:country_weights].length > 0
          create_country_weight(scraped_data[:country_weights], etf.id)
        end
        record_history(etf.id, current_user.id)

        @etf = Etf.where(symbol: sym).first
        render :show
      else
        render json: ["Invalid Symbol"]
      end

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

  def create_country_weight(c_weights, id)
    c_weights.each do |cw|
      CountryWeight.create(
        country: cw[:country],
        percent: cw[:percent],
        etf_id: id
      )
    end
  end

  def record_history(etf_id, user_id)
    History.create(
      etf_id: etf_id,
      user_id: user_id
    )
  end

end
