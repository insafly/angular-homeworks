const {
  interval,
  from,
  of,
} = require('rxjs');
const {
  concatMap,
  delay,
  map,
  filter,
  bufferCount,
} = require('rxjs/operators');

// Дан обзервер, эмитящий значение (инкрементальное) каждые 200мс.
// Брать только значения, которые являютсся простыми числами,
// выводить ссуммы каждых 2х из них в подписчиков, как стринги.
const publisher1 = interval(200)
  .pipe(
    filter((val) => {
      for (let i = 2; i < val; i += 1) {
        if (val % i === 0) return false;
      }
      return true;
    }),
    bufferCount(2),
    map((arr) => {
      let sum = 0;

      arr.forEach((val) => {
        sum += val;
      });

      return `${sum}`;
    }),
  );

// Дан обзервер массив, переданный во фром, выдавать данные по 3 штуки с перерывом в 2 секунды
const publisher2 = from(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 't', 'r', 'a', 't', 'a', 't', 'a'])
  .pipe(
    bufferCount(3),
    concatMap((x) => of(x).pipe(delay(2000))),
  );

publisher1.subscribe(
  (val) => {
    console.log(val);
  },
  (err) => {
    console.log(`Way-way... Error: "${err}"`);
  },
  () => {
    console.log('Observer is dead!');
  },
);
