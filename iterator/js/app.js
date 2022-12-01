/** @format */

const counter = {
  num: 0,
  next() {
    return {
      value: ++this.num,
      done: this.num > 5,
    };
  },
};

// const step1 = counter.next();
// const step2 = counter.next();
// const step3 = counter.next();
// const step4 = counter.next();
// const step5 = counter.next();
// const step6 = counter.next();
// console.log({step1,step2,step3,step4,step5,step6});

const iterable = {
  [Symbol.iterator]() {
    let num = 0;
    const iterator = {
      next() {
        return {
          value: ++num,
          done: num > 5,
        };
      },
    };
    return iterable;
  },
};

const iterator = iterable[Symbol.iterator]();

// const step1 = iterator.next();
// const step2 = iterator.next();
// const step3 = iterator.next();
// const step4 = iterator.next();
// const step5 = iterator.next();
// const step6 = iterator.next();
// console.log({ step1, step2, step3, step4, step5, step6 });


// for (let step of iterable) {
// 	console.log(step);
// }
// console.log([...iterable]);

const map = new Map([['name','Vova'],['age',32]]);
const mapIterator = map[Symbol.iterator]();

console.log([...map]);