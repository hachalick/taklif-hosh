import { TCountry, TGCountry, THCountry } from "./app/type.";

const HCountry: THCountry = {
  Arad: 366,
  Bucharest: 0,
  Craiova: 160,
  Dobreta: 242,
  Eforie: 161,
  Fagaras: 176,
  Giurgiu: 77,
  Hirsova: 151,
  Lasi: 226,
  Lugoj: 244,
  Mehadia: 241,
  Neamt: 234,
  Oradea: 380,
  Pitesti: 100,
  Rimnicu_Vikea: 193,
  Sibiu: 253,
  Timisoara: 329,
  Urziceni: 80,
  Vaslui: 199,
  Zerind: 374,
};

const GCountry: TGCountry = {
  Arad: {
    Zerind: 75,
    Sibiu: 140,
    Timisoara: 118,
  },
  Craiova: {
    Dobreta: 120,
    Pitesti: 138,
    Rimnicu_Vikea: 146,
  },
  Dobreta: {
    Mehadia: 75,
    Craiova: 120,
  },
  Eforie: {
    Hirsova: 86,
  },
  Fagaras: {
    Sibiu: 99,
    Bucharest: 211,
  },
  Giurgiu: {
    Bucharest: 90,
  },
  Hirsova: {
    Eforie: 86,
    Urziceni: 98,
  },
  Lasi: {
    Neamt: 87,
    Vaslui: 92,
  },
  Lugoj: {
    Timisoara: 111,
    Mehadia: 70,
  },
  Mehadia: {
    Lugoj: 70,
    Dobreta: 75,
  },
  Neamt: {
    Lasi: 87,
  },
  Oradea: {
    Zerind: 75,
    Sibiu: 151,
  },
  Pitesti: {
    Rimnicu_Vikea: 97,
    Craiova: 138,
    Bucharest: 101,
  },
  Rimnicu_Vikea: {
    Pitesti: 97,
    Craiova: 146,
    Sibiu: 80,
  },
  Sibiu: {
    Rimnicu_Vikea: 80,
    Fagaras: 99,
    Oradea: 151,
    Arad: 140,
  },
  Timisoara: {
    Arad: 118,
    Lugoj: 111,
  },
  Urziceni: {
    Vaslui: 142,
    Hirsova: 98,
    Bucharest: 85,
  },
  Vaslui: {
    Lasi: 92,
    Urziceni: 142,
  },
  Zerind: {
    Arad: 75,
    Oradea: 71,
  },
  Bucharest: {
    Urziceni: 85,
    Pitesti: 101,
    Giurgiu: 90,
    Fagaras: 211,
  },
};

let list: { [key: string]: number }[] = [];

function calculateAStar(parent: TCountry, valPra: number, child: TCountry) {
  const hn = HCountry[child];
  const gn = GCountry[child][parent] ?? 0;
  const gnp = valPra - HCountry[parent] < 0 ? 0 : valPra - HCountry[parent];
  console.log("|");
  console.log(
    "|+>",
    child,
    "( gn-parent:",
    gnp,
    "+ gn:",
    gn,
    ")",
    "g(n):",
    gnp + gn,
    "h(n):",
    hn,
    "f(n):",
    gnp + gn + hn
  );
  return hn + gn + gnp;
}

function addToList(
  name: string,
  fn: number,
  list: { [key: string]: number }[]
) {
  let a: { [key: string]: number } = {};
  a[name] = fn;
  list.push(a);
}

function execute(list: { [key: string]: number }[], destination: TCountry) {
  const item = list.splice(findBestSelect(list), 1)[0];
  if (item) {
    const parent = Object.keys(item)[0] as TCountry;
    if (parent !== destination) {
      console.log("\n-", parent);
      Object.keys(GCountry[parent]).forEach((key) => {
        addToList(key as TCountry, calculateAStar(parent, item[parent], key as TCountry), list);
      });
      return true
    } else {
      console.log();
      console.log("best fn to", `"${destination}"`, "founded");
      return false;
    }
  }
  return false;
}

function findBestSelect(list: { [key: string]: number }[]) {
  let minIndex = 0;
  let minValue = Object.values(list[0])[0];
  for (let i = 1; i < list.length; i++) {
    const value = Object.values(list[i])[0];
    if (value < minValue) {
      minValue = value;
      minIndex = i;
    }
  }
  return minIndex;
}

const starter: TCountry = "Arad";
const destination: TCountry = "Bucharest";

addToList(starter, calculateAStar(starter, 0, starter), list);

let flag = true;
while (flag) {
  flag = execute(list, destination);
}

function main () {
  
}