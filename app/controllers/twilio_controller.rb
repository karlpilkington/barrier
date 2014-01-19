class TwilioController < ApplicationController
  def send_message

    response = TwilioClient::send_message("Suspicious transaction detected: transaction id: 12345")
    render json: response
  end
end
