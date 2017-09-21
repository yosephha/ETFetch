# == Schema Information
#
# Table name: histories
#
#  id         :integer          not null, primary key
#  etf_id     :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class History < ApplicationRecord
  belongs_to :etf, foreign_key: :etf_id, class_name: :Etf
  belongs_to :user, foreign_key: :user_id, class_name: :User
end
