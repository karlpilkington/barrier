class StaticController < ApplicationController
  
  before_filter :no_layout
  
  def home
  end

  def login
  end

  def dashboard
  end

  private

  def no_layout
    render layout: false
  end

end
