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

require 'test_helper'

class EtfTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
