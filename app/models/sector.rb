# == Schema Information
#
# Table name: sectors
#
#  id         :integer          not null, primary key
#  name       :string
#  percent    :decimal(, )
#  etf_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Sector < ApplicationRecord
  validates :name, :etf_id, :percent, presence: true

  belongs_to :etf, foreign_key: :etf_id, class_name: :Etf
end
