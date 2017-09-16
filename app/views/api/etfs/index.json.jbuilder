@etfs.each do |etf|
  json.set! etf.symbol do
    json.id etf.id
    json.name etf.name
    json.description etf.description
  end
end
