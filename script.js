let allGroceries = {
  anApple: {
    color: "red",
    weight: {
      value: 0.5,
      unit: "kg",
    },
    amount: 0,
  },

  bread: {
    color: "brown",
    rawMaterial: "rye",
    company: "Dr. Mark",
    amount: 0,
  },

  milk: {
    flavor: "almond",
    sugar: "no sugar",
    company: "Alpro",
    liters: {
      value: 1000,
      unit: "cc",
    },
    amount: 0,
  },

  pasta: {
    flavor: "spinach",
    shape: "shell",
    company: "Hasade",
    weight: {
      value: 400,
      unit: "gr",
    },
    amount: 0,
  },

  orangeGuice: {
    preparationMethod: {
      squeezed: {
        value: 100,
        unit: "%",
      },
    },
    nutritionalValues: {
      sodium: {
        value: 0,
        unit: "mg",
      },
      calories: {
        value: 39,
        unit: "cal",
      },
      vitaminC: {
        value: 35,
        unit: "mg",
      },
    },
    company: "Prigat",
    amount: 0,
  },
};

function addAnApple() {
  allGroceries.anApple.amount += 1;
}

function addBread() {
  allGroceries.bread.amount += 1;
}

function addMilk() {
  allGroceries.milk.amount += 1;
}

function addPasta() {
  allGroceries.pasta.amount += 1;
}

function addOrangeJuice() {
  allGroceries.orangeGuice.amount += 1;
}

function reduceAnApple() {
  allGroceries.anApple.amount -= 1;
}

function reduceBread() {
  allGroceries.bread.amount -= 1;
}

function reduceMilk() {
  allGroceries.milk.amount -= 1;
}

function reducePasta() {
  allGroceries.pasta.amount -= 1;
}

function reduceOrangeJuice() {
  allGroceries.orangeGuice.amount -= 1;
}

function showCart() {
  console.log(allGroceries);
}
