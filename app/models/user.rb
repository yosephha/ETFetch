# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  name            :string
#  email           :string
#

class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  has_many :histories, foreign_key: :user_id, class_name: :History

  def etfs_visited_by_id
    histories.map(&:etf_id)
  end

  def etfs_visited
    Etf.where(id: etfs_visited_by_id)
  end


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user

    user.has_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    nil
  end

  def has_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_token
    self.save!
    self.session_token
  end

  private

  def generate_token
    SecureRandom.base64
  end

  def ensure_session_token
    self.session_token ||= generate_token
  end
end
