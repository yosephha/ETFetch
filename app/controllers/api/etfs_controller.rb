class Api::EtfsController < ApplicationController

  def index
    @etfs = Etf.all
  end

  def new
  end

  def create
  end

  def show
    @etf = Etf.where(symbol: params[:id]).first
    render :show
  end

  private
  def user_params
    params.require(:etf).permit(:symbol)
  end
end
