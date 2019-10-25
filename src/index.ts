enum Forecast {
  sun,
  wind,
  clouds,
  rain,
  snow,
}

const getRandom = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

const getForecast = (): Promise<string> =>
  new Promise<string>((resolve: any): void => {
    setTimeout(
      () => {
        resolve(Forecast[getRandom(0, Object.keys(Forecast).length / 2)]);
      },
      getRandom(500, 3500));
  });

const fastedForecast = (amount: number): void => {
  const base: number[] = Array.from({ length: amount });

  Promise.race(base.map(getForecast))
    .then((response: string): void => {
      // tslint:disable-next-line:no-console
      console.log(`The fastest forecast is "${response}"`);
    })
    .catch(console.error);
};

const frequentForecast = (amount: number): void => {
  const base: number[] = Array.from({ length: amount });

  Promise.all(base.map(getForecast))
    .then((response: string[]): object => {
      const counters: {[key: string]: number} = {};

      for (const value of response) {
        counters[value] = value ? (counters[value] || 0) + 1 : 1;
      }

      return counters;
    })
    .then((response: object): void => {
      let mostFrequentCounter: number = 0;
      let mostFrequentValue: string = '';
      for (const key: string in response) {
        if (mostFrequentCounter < response[key]) {
          mostFrequentCounter = response[key];
          mostFrequentValue = key;
        } else if (mostFrequentCounter === response[key]) {
          mostFrequentValue += `, ${key}`;
        }
      }

      // tslint:disable-next-line:no-console
      console.log(`Most frequent result is "${mostFrequentValue}" (${mostFrequentCounter} times)`);
    })
    .catch(console.error);
};

fastedForecast(4);
frequentForecast(40);
