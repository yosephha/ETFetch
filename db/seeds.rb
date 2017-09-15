# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Etf.destroy_all
etf1 = Etf.create(
  name: "S&P 500 Index",
  symbol: "SPY",
  description: "The S&P 500® Index is composed of five hundred (500) selected stocks, all of which are listed on national stock exchanges and spans over 25 separate industry groups."
)

Holding.destroy_all
holding1 = Holding.create(
  name: "Apple Inc.",
  weight: 3.86,
  share_held: 59293230,
  etf_id: etf1.id
)
holding2 = Holding.create(
  name: "Microsoft Corporation",
  weight: 2.70,
  share_held: 87796730,
  etf_id: etf1.id
)
holding3 = Holding.create(
  name: "Facebook Inc. Class A",
  weight: 1.89,
  share_held: 26879568,
  etf_id: etf1.id
)
holding4 = Holding.create(
  name: "Amazon.com Inc.",
  weight: 1.84,
  share_held: 4511397,
  etf_id: etf1.id
)
holding5 = Holding.create(
  name: "Johnson & Johnson",
  weight: 1.69,
  share_held: 30635072,
  etf_id: etf1.id
)
holding6 = Holding.create(
  name: "Berkshire Hathaway Inc. Class B",
  weight: 1.59,
  share_held: 21600424,
  etf_id: etf1.id
)
holding7 = Holding.create(
  name: "Exxon Mobil Corporation",
  weight: 1.59,
  share_held: 48179692,
  etf_id: etf1.id
)
holding8 = Holding.create(
  name: "JPMorgan Chase & Co.",
  weight: 1.51,
  share_held: 40403030,
  etf_id: etf1.id
)
holding9 = Holding.create(
  name: "Alphabet Inc. Class A",
  weight: 1.31,
  share_held: 3384477,
  etf_id: etf1.id
)
holding10 = Holding.create(
  name: "Alphabet Inc. Class C",
  weight: 1.29,
  share_held: 3393107,
  etf_id: etf1.id
)

Sector.destroy_all
sector1 = Sector.create(
  name: "Information Technology",
  percent: 23.24,
  etf_id: etf1.id
)
sector2 = Sector.create(
  name: "Health Care",
  percent: 14.81,
  etf_id: etf1.id
)
sector3 = Sector.create(
  name: "Financials",
  percent: 14.14,
  etf_id: etf1.id
)
sector4 = Sector.create(
  name: "Consumer Discretionary",
  percent: 11.97,
  etf_id: etf1.id
)
sector5 = Sector.create(
  name: "Industrials",
  percent: 10.12,
  etf_id: etf1.id
)
sector6 = Sector.create(
  name: "Consumer Staples",
  percent: 8.48,
  etf_id: etf1.id
)
sector7 = Sector.create(
  name: "Energy",
  percent: 5.91,
  etf_id: etf1.id
)
sector8 = Sector.create(
  name: "Utilities",
  percent: 3.22,
  etf_id: etf1.id
)
sector9 = Sector.create(
  name: "Real Estate",
  percent: 3.03,
  etf_id: etf1.id
)
sector10 = Sector.create(
  name: "Materials",
  percent: 2.93,
  etf_id: etf1.id
)
sector11 = Sector.create(
  name: "Telecommunication Services",
  percent: 2.06,
  etf_id: etf1.id
)
sector12 = Sector.create(
  name: "Unassigned",
  percent: 0.09,
  etf_id: etf1.id
)
