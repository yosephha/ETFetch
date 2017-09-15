require 'test_helper'

class Api::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get :create" do
    get api_users_:create_url
    assert_response :success
  end

end
