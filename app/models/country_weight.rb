# == Schema Information
#
# Table name: country_weights
#
#  id         :integer          not null, primary key
#  country    :string
#  percent    :decimal(, )
#  etf_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CountryWeight < ApplicationRecord
  belongs_to :etf, foreign_key: :etf_id, class_name: :Etf
end
