const userInfo = {
  name: "Diego Fernandes",
  height: 190,
  hasTicket: true,
};

const minimunHeightRequiredForToy = 130;

const currentHour = new Date().getHours();

const isParkOpen = currentHour > 9 && currentHour < 18;

if (!isParkOpen) {
  throw new Error("O parque está fechado!");
}

const doesUserHaveTicket = userInfo.hasTicket;

if (!doesUserHaveTicket) {
  throw new Error("O Diego não possui um bilhete para entrar no parque!");
}

const canUserEnterTheToy = userInfo.height > minimunHeightRequiredForToy;

if (!canUserEnterTheToy) {
  throw new Error("O Diego não pode entrar no brinquedo!");
}

console.log("O Diego se divertiu muito! :)");