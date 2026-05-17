const TOPICS = [
  {
    id: "trains",
    name: "Problems on Trains",
    url: "https://www.indiabix.com/aptitude/problems-on-trains/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/problems-on-trains/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/problems-on-trains/039001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/problems-on-trains/040001" },
      { name: "Data Sufficiency 3", url: "https://www.indiabix.com/aptitude/problems-on-trains/041001" }
    ]
  },
  {
    id: "tnd",
    name: "Time and Distance",
    url: "https://www.indiabix.com/aptitude/time-and-distance/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/time-and-distance/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/time-and-distance/037001" }
    ]
  },
  {
    id: "hnd",
    name: "Height and Distance",
    url: "https://www.indiabix.com/aptitude/height-and-distance/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/height-and-distance/" }
    ]
  },
  {
    id: "tnw",
    name: "Time and Work",
    url: "https://www.indiabix.com/aptitude/time-and-work/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/time-and-work/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/time-and-work/030001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/time-and-work/031001" },
      { name: "Data Sufficiency 3", url: "https://www.indiabix.com/aptitude/time-and-work/032001" }
    ]
  },
  {
    id: "si",
    name: "Simple Interest",
    url: "https://www.indiabix.com/aptitude/simple-interest/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/simple-interest/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/simple-interest/047001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/simple-interest/048001" }
    ]
  },
  {
    id: "ci",
    name: "Compound Interest",
    url: "https://www.indiabix.com/aptitude/compound-interest/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/compound-interest/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/compound-interest/050001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/compound-interest/051001" },
      { name: "Data Sufficiency 3", url: "https://www.indiabix.com/aptitude/compound-interest/052001" }
    ]
  },
  {
    id: "pnl",
    name: "Profit and Loss",
    url: "https://www.indiabix.com/aptitude/profit-and-loss/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/profit-and-loss/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/profit-and-loss/019001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/profit-and-loss/020001" },
      { name: "Data Sufficiency 3", url: "https://www.indiabix.com/aptitude/profit-and-loss/021001" },
      { name: "Data Sufficiency 4", url: "https://www.indiabix.com/aptitude/profit-and-loss/022001" }
    ]
  },
  {
    id: "partnership",
    name: "Partnership",
    url: "https://www.indiabix.com/aptitude/partnership/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/partnership/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/partnership/025001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/partnership/026001" },
      { name: "Data Sufficiency 3", url: "https://www.indiabix.com/aptitude/partnership/027001" }
    ]
  },
  {
    id: "pct",
    name: "Percentage",
    url: "https://www.indiabix.com/aptitude/percentage/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/percentage/" }
    ]
  },
  {
    id: "ages",
    name: "Problems on Ages",
    url: "https://www.indiabix.com/aptitude/problems-on-ages/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/problems-on-ages/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/problems-on-ages/013001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/problems-on-ages/014001" },
      { name: "Data Sufficiency 3", url: "https://www.indiabix.com/aptitude/problems-on-ages/015001" }
    ]
  },
  {
    id: "calendar",
    name: "Calendar",
    url: "https://www.indiabix.com/aptitude/calendar/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/calendar/" }
    ]
  },
  {
    id: "clock",
    name: "Clock",
    url: "https://www.indiabix.com/aptitude/clock/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/clock/" }
    ]
  },
  {
    id: "average",
    name: "Average",
    url: "https://www.indiabix.com/aptitude/average/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/average/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/average/007001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/average/008001" }
    ]
  },
  {
    id: "area",
    name: "Area",
    url: "https://www.indiabix.com/aptitude/area/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/area/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/area/055001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/area/056001" },
      { name: "Data Sufficiency 3", url: "https://www.indiabix.com/aptitude/area/057001" }
    ]
  },
  {
    id: "volume",
    name: "Volume and Surface Area",
    url: "https://www.indiabix.com/aptitude/volume-and-surface-area/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/volume-and-surface-area/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/volume-and-surface-area/059001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/volume-and-surface-area/060001" }
    ]
  },
  {
    id: "permcomb",
    name: "Permutation and Combination",
    url: "https://www.indiabix.com/aptitude/permutation-and-combination/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/permutation-and-combination/" }
    ]
  },
  {
    id: "numbers",
    name: "Numbers",
    url: "https://www.indiabix.com/aptitude/numbers/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/numbers/" }
    ]
  },
  {
    id: "probnums",
    name: "Problems on Numbers",
    url: "https://www.indiabix.com/aptitude/problems-on-numbers/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/problems-on-numbers/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/problems-on-numbers/010001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/problems-on-numbers/011001" }
    ]
  },
  {
    id: "hcflcm",
    name: "Problems on H.C.F and L.C.M",
    url: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/" }
    ]
  },
  {
    id: "decimal",
    name: "Decimal Fraction",
    url: "https://www.indiabix.com/aptitude/decimal-fraction/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/decimal-fraction/" }
    ]
  },
  {
    id: "simplification",
    name: "Simplification",
    url: "https://www.indiabix.com/aptitude/simplification/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/simplification/" }
    ]
  },
  {
    id: "sqrtcbrt",
    name: "Square Root and Cube Root",
    url: "https://www.indiabix.com/aptitude/square-root-and-cube-root/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/square-root-and-cube-root/" }
    ]
  },
  {
    id: "surds",
    name: "Surds and Indices",
    url: "https://www.indiabix.com/aptitude/surds-and-indices/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/surds-and-indices/" }
    ]
  },
  {
    id: "ratio",
    name: "Ratio and Proportion",
    url: "https://www.indiabix.com/aptitude/ratio-and-proportion/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/ratio-and-proportion/" }
    ]
  },
  {
    id: "chainrule",
    name: "Chain Rule",
    url: "https://www.indiabix.com/aptitude/chain-rule/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/chain-rule/" }
    ]
  },
  {
    id: "pipes",
    name: "Pipes and Cistern",
    url: "https://www.indiabix.com/aptitude/pipes-and-cistern/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/pipes-and-cistern/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/pipes-and-cistern/034001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/pipes-and-cistern/035001" }
    ]
  },
  {
    id: "boats",
    name: "Boats and Streams",
    url: "https://www.indiabix.com/aptitude/boats-and-streams/",
    subs: [
      { name: "General Questions",  url: "https://www.indiabix.com/aptitude/boats-and-streams/" },
      { name: "Data Sufficiency 1", url: "https://www.indiabix.com/aptitude/boats-and-streams/043001" },
      { name: "Data Sufficiency 2", url: "https://www.indiabix.com/aptitude/boats-and-streams/044001" }
    ]
  },
  {
    id: "alligation",
    name: "Alligation or Mixture",
    url: "https://www.indiabix.com/aptitude/alligation-or-mixture/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/alligation-or-mixture/" }
    ]
  },
  {
    id: "log",
    name: "Logarithm",
    url: "https://www.indiabix.com/aptitude/logarithm/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/logarithm/" }
    ]
  },
  {
    id: "races",
    name: "Races and Games",
    url: "https://www.indiabix.com/aptitude/races-and-games/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/races-and-games/" }
    ]
  },
  {
    id: "stocks",
    name: "Stocks and Shares",
    url: "https://www.indiabix.com/aptitude/stocks-and-shares/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/stocks-and-shares/" }
    ]
  },
  {
    id: "prob",
    name: "Probability",
    url: "https://www.indiabix.com/aptitude/probability/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/probability/" }
    ]
  },
  {
    id: "truedisc",
    name: "True Discount",
    url: "https://www.indiabix.com/aptitude/true-discount/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/true-discount/" }
    ]
  },
  {
    id: "bankdisc",
    name: "Banker's Discount",
    url: "https://www.indiabix.com/aptitude/bankers-discount/",
    subs: [
      { name: "General Questions", url: "https://www.indiabix.com/aptitude/bankers-discount/" }
    ]
  },
  {
    id: "oddman",
    name: "Odd Man Out and Series",
    url: "https://www.indiabix.com/aptitude/odd-man-out-and-series/",
    subs: [
      { name: "Odd Man Out",    url: "https://www.indiabix.com/aptitude/odd-man-out-and-series/" },
      { name: "Pick Wrong No.", url: "https://www.indiabix.com/aptitude/odd-man-out-and-series/071001" },
      { name: "Missing No.",   url: "https://www.indiabix.com/aptitude/odd-man-out-and-series/072001" },
      { name: "Find Wrong No.", url: "https://www.indiabix.com/aptitude/odd-man-out-and-series/073001" }
    ]
  }
];