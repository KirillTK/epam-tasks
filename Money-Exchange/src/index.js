// PLEASE DON'T change function name
module.exports = function makeExchange(coins) {
  let currency = coins, H, Q, D, N, P;
  const obj = {};
  if (currency <= 0) {
    return {};
  }
  if (currency > 10000) {
    return {
      'error': 'You are rich, my friend! We don\'t have so much coins for exchange'
    };
  }

  function currencyValue(banknot, value) {
    if (Math.floor(currency / value) > 0) {
      banknot = Math.floor(currency / value);
      currency = currency % value;
      return banknot;
    }
  }

  function checkMoneyObj(money, name) {
    if (money !== undefined) {
      obj[name] = money;
    }
  }

  H = currencyValue(H, 50);
  Q = currencyValue(Q, 25);
  D = currencyValue(D, 10);
  N = currencyValue(N, 5);
  P = currencyValue(P, 1);
  checkMoneyObj(H, 'H');
  checkMoneyObj(Q, 'Q');
  checkMoneyObj(D, 'D');
  checkMoneyObj(N, 'N');
  checkMoneyObj(P, 'P');
  return obj;
};
