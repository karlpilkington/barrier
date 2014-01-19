class TwilioClient

  def self.send_message(text)

    begin
      client = Twilio::REST::Client.new ENV['TWILIO_SID'], ENV['TWILIO_TOKEN']
      client.account.messages.create({
        from: ENV['TWILIO_FROM'],
        to: ENV['TWILIO_TO'],
        body: text
      })
    rescue Twilio::REST::RequestError => e
      return { success: false, message: e.message }
    end

    return { success: true, message: "Message sent" }

  end

end