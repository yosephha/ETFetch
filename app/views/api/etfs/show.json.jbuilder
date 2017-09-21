etf = @etf

json.symbol etf.symbol
json.id etf.id
json.name etf.name
json.description etf.description

json.holdings etf.holdings do |holding|
  json.name holding.name
  json.weight holding.weight.to_f
  json.share_held holding.share_held
end

json.sectors etf.sectors do |sector|
  json.name sector.name
  json.percent sector.percent.to_f
end

json.country_weights etf.country_weights do |weight|
  json.country weight.country
  json.percent weight.percent
end
