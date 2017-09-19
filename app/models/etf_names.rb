class EtfNames < ApplicationRecord
  def self.sym_to_name
    name_hash = {
      "DGT" => "SPDR® Global Dow ETF",
      "CWI" => "SPDR® MSCI ACWI ex-US ETF",
      "ACIM" => "SPDR® MSCI ACWI IMI ETF",
      "GWX" => "SPDR® S&P® International Small Cap ETF",
      "GWL" => "SPDR® S&P® World ex-US ETF",
      "FEZ" => "SPDR® EURO STOXX 50® ETF",
      "SMEZ" => "SPDR® EURO STOXX® Small Cap ETF",
      "FEU" => "SPDR® STOXX® Europe 50 ETF",
      "XINA" => "SPDR® MSCI China A Shares IMI ETF",
      "GXC" => "SPDR® S&P® China ETF",
      "GMF" => "SPDR® S&P® Emerging Asia Pacific ETF",
      "GMM" => "SPDR® S&P® Emerging Markets ETF",
      "EWX" => "SPDR® S&P® Emerging Markets Small Cap ETF",
      "DIA" => "SPDR® Dow Jones® Industrial Average ETF",
      "SYE" => "SPDR® MFS Systematic Core Equity ETF",
      "ONEK" => "SPDR Russell 1000® ETF",
      "TWOK" => "SPDR Russell 2000® ETF",
      "THRK" => "SPDR Russell 3000® ETF",
      "SMD" => "SPDR® S&P 1000® ETF",
      "SPY" => "SPDR® S&P 500® ETF",
      "SLY" => "SPDR® S&P® 600 Small Cap ETF",
      "MDY" => "SPDR® S&P MIDCAP 400® ETF",
      "SYG" => "SPDR® MFS Systematic Growth Equity ETF",
      "SYV" => "SPDR® MFS Systematic Value Equity ETF",
      "MDYG" => "SPDR® S&P® 400 Mid Cap Growth ETF",
      "MDYV" => "SPDR® S&P® 400 Mid Cap Value ETF",
      "SPYG" => "SPDR® S&P® 500 Growth ETF",
      "SPYV" => "SPDR® S&P® 500 Value ETF",
      "SLYG" => "SPDR® S&P® 600 Small Cap Growth ETF",
      "SLYV" => "SPDR® S&P® 600 Small Cap Value ETF",
      "XLY" => "Consumer Discretionary Select Sector SPDR® Fund",
      "XLP" => "Consumer Staples Select Sector SPDR® Fund",
      "XLE" => "Energy Select Sector SPDR® Fund",
      "XLF" => "Financial Select Sector SPDR® Fund",
      "XLV" => "Health Care Select Sector SPDR® Fund",
      "XLI" => "Industrial Select Sector SPDR® Fund",
      "XLB" => "Materials Select Sector SPDR® Fund",
      "XLRE" => "Real Estate Select Sector SPDR® Fund",
      "XLK" => "Technology Select Sector SPDR® Fund",
      "XLU" => "Utilities Select Sector SPDR® Fund",
      "XITK" => "SPDR® FactSet Innovative Technology ETF",
      "XNTK" => "SPDR® NYSE Technology ETF",
      "XAR" => "SPDR® S&P® Aerospace & Defense ETF",
      "KBE" => "SPDR® S&P® Bank ETF",
      "XBI" => "SPDR® S&P® Biotech ETF",
      "KCE" => "SPDR® S&P® Capital Markets ETF",
      "XHE" => "SPDR® S&P® Health Care Equipment ETF",
      "XHS" => "SPDR® S&P® Health Care Services ETF",
      "XHB" => "SPDR® S&P® Homebuilders ETF",
      "KIE" => "SPDR® S&P® Insurance ETF",
      "XWEB" => "SPDR® S&P® Internet ETF",
      "XME" => "SPDR® S&P® Metals & Mining ETF",
      "XES" => "SPDR® S&P® Oil & Gas Equipment & Services ETF",
      "XOP" => "SPDR® S&P® Oil & Gas Exploration & Production ETF",
      "XPH" => "SPDR® S&P® Pharmaceuticals ETF",
      "KRE" => "SPDR® S&P® Regional Banking ETF",
      "XRT" => "SPDR® S&P® Retail ETF",
      "XSD" => "SPDR® S&P® Semiconductor ETF",
      "XSW" => "SPDR® S&P® Software & Services ETF",
      "XTH" => "SPDR® S&P® Technology Hardware ETF",
      "XTL" => "SPDR® S&P® Telecom ETF",
      "XTN" => "SPDR® S&P® Transportation ETF"
    }
  end
end
