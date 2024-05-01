export type TCountry =
  | "Arad"
  | "Bucharest"
  | "Craiova"
  | "Dobreta"
  | "Eforie"
  | "Fagaras"
  | "Giurgiu"
  | "Hirsova"
  | "Lasi"
  | "Lugoj"
  | "Mehadia"
  | "Neamt"
  | "Oradea"
  | "Pitesti"
  | "Rimnicu_Vikea"
  | "Sibiu"
  | "Timisoara"
  | "Urziceni"
  | "Vaslui"
  | "Zerind";

export type THCountry = { [key in TCountry]: number };

export type TGCountry = { [key in TCountry]: { [key in TCountry]?: number } };
