class OpenAI
  client = OpenAI::Client.new(access_token: ENV.fetch("OPENAI_ACCESS_TOKEN"))

  def initialize(inputImage, outpuImage)
    @param1 = param1
    @param2 = param2
  end

  def perform
    # Your business logic goes here
    result = @param1 + @param2
    # ...
    result
  end
end
