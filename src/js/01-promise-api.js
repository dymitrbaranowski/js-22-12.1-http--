/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
//     }
//     reject('Промис выполнился с ошибкой (отклонён, rejected)');
//   }, 1000);
// });

// promise.then(onFullFilled, onRejected);

// function onFullFilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

// promise
//   .then(onFullFilled)
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду выполнен в любом случаe'));

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
//     }

//     reject('Промис выполнился с ошибкой (отклонён, rejected)');
//   }, 1000);
// });

// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду выполнен в любом случае'));

const makeOrder = dish => {
  const DELAY = 1000;

  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve('вот ваше блюдо');
      }
      reject('Извините закончились продукты');
    }, DELAY);
  });
};

makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(result) {
  console.log('onMakeOrderSuccess');
  console.log(result);
}

function onMakeOrderError(error) {
  console.log('onMakeOrderError');
  console.log(error);
}
