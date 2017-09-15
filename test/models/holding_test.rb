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

require 'test_helper'

class HoldingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
