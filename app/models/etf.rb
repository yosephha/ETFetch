# == Schema Information
#
# Table name: etfs
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  symbol      :string
#

class Etf < ApplicationRecord
  validates :name, :description, :symbol, presence: true
  has_many :sectors, foreign_key: :etf_id, class_name: :Sector
  has_many :holdings, foreign_key: :etf_id, class_name: :Holding
  has_many :histories, foreign_key: :etf_id, class_name: :History
  has_many :country_weights, foreign_key: :etf_id, class_name: :CountryWeight
end
