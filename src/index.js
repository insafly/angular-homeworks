const {
  Observable: { create },
  interval,
} = require('rxjs');
const {
  take,
  skip,
  merge,
} = require('rxjs/operators');

// 1. Реализовать свой обсервер который будет эмитить данные инкрементальные
// через число секунд по ряду фибоначи -> сразу, 1сек, 1 сек, 2 сек, 3сек, 5сек и т.д
const publisher1 = create((observer) => {
  let counter = 0;
  let delayPrev = 0;
  let delayNext = 1000;
  let delayCurrent = delayPrev;

  const fibomacciTimer = (delay) => {
    setTimeout(
      () => {
        observer.next(counter);
        counter += 1;

        delayCurrent = delayNext;
        delayNext += delayPrev;
        delayPrev = delayCurrent;

        fibomacciTimer(delayCurrent);
      },
      delay,
    );
  };
  fibomacciTimer(delayCurrent);
});

// 2. даны два интервала один 100мс второй 300 мс -> слить их данные -> взять элементы с 5 по 12
const publisher21 = interval(100);
const publisher22 = interval(300).pipe(merge(publisher21)).pipe(skip(4)).pipe(take(8));

// 3. Реализовать свой interval с помошью create
const customInterval = (delay) => (
  create((observer) => {
    let counter = 0;
    setInterval(() => {
      observer.next(counter);
      counter += 1;
    }, delay);
  })
);
const publisher3 = customInterval(500);

// 4. Реализовать свой from с помощью create
const customFrom = (arr) => (
  create((observer) => {
    arr.forEach((element) => {
      observer.next(element);
    });
    observer.complete();
  })
);
const publisher4 = customFrom([0, 't', 1, 'r', 2, 'a', 3, 't', 4, 'a', 5, 't', 6, 'a', 7]);

// 5. Реализовать from with delay -> [arr], ms ->
// эмититься занчение обсервера с интервалом указаным в милисекундах
const customFromWithDelay = (arr, delay) => (
  create((observer) => {
    let i = 0;
    const int = setInterval(
      () => {
        observer.next(arr[i]);
        i += 1;

        if (i === arr.length) {
          clearInterval(int);
          observer.complete();
        }
      },
      delay,
    );
  })
);
const publisher5 = customFromWithDelay([0, 't', 1, 'r', 2, 'a', 3, 't', 4, 'a', 5, 't', 6, 'a', 7], 500);

const subscriber = publisher1.subscribe(
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
