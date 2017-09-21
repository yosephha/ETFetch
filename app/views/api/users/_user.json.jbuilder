json.extract! user, :id, :username
json.history user.etfs_visited do |etf|
  json.name etf.name
  json.description etf.description
  json.symbol etf.symbol 
end
