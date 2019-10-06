enum Forecast {
  sun,
  wind,
  clouds,
  rain,
  snow,
}

const getRandom = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;
const getForecast = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(
      () => {
        resolve(Forecast[getRandom(0, Object.keys(Forecast).length / 2)]);
      },
      getRandom(500, 3500));
  });
};

const fastedForecast = (amount: number): void => {
  const base: number[] = Array.from({ length: amount });

  Promise.race(base.map(getForecast))
    .then((res) => {
      console.log(`The fastest forecast is "${res}"`);
    })
    .catch(console.error);
};

const frequentForecast = (amount: number): void => {
  const base: number[] = Array.from({ length: amount });

  Promise.all(base.map(getForecast))
    .then((res) => {
      const counters: { [k: string]: number } = {};
      let mostFrequentCounter: number = 0;
      let mostFrequentValue: string = '';

      for (const value of res) {
        counters[value] === undefined ? counters[value] = 1 : counters[value] += 1;
      }

      for (const key in counters) {
        if (mostFrequentCounter < counters[key]) {
          mostFrequentCounter = counters[key];
          mostFrequentValue = key;
        } else if (mostFrequentCounter === counters[key]) {
          mostFrequentValue += `, ${key}`;
        }
      }
      console.log(`Most frequent result is "${mostFrequentValue}" (${mostFrequentCounter} times)`);
    })
    .catch(console.error);
};

fastedForecast(4);
frequentForecast(40);
