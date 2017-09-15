# == Schema Information
#
# Table name: holdings
#
#  id         :integer          not null, primary key
#  name       :string
#  weight     :decimal(, )
#  share_held :integer
#  etf_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Holding < ApplicationRecord
  validates :name, :weight, :share_held, :etf_id, presence: true

  belongs_to :etf, foreign_key: :etf_id, class_name: :Etf
end
