require 'rake'
Rake::Task.clear
ETFetch::Application.load_tasks


class Api::EtfsController < ApplicationController

  def index
    @etfs = Etf.all
  end

  def show
    @etf = Etf.where(symbol: params[:id]).first
    if @etf
      render :show
    else

      EtfScraper.scrape('https://us.spdrs.com/en/etf/spdr-sp-500-etf-SPY')
      render :show
    end
  end

  private
  def user_params
    params.require(:etf).permit(:symbol)
  end
end
