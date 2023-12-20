class Api::V1::HomeController < ApplicationController
  def index
    @email_lists = "HELLO"

  render json: {key: @email_lists}
  end
end
