/** @format */

const sy1 = Symbol();
const sy2 = Symbol();

console.log("sy1 === sy2", sy1 === sy2);

const sy3 = Symbol("hello");
const sy4 = Symbol("hello");

console.log("sy3 === sy4", sy3 === sy4);

const obj = {
  budget: 1000,
  [Symbol("budget")]: 2000,
  [Symbol("budget")]: 3000,
};

console.log("obj", obj);

console.log("Object.keys", Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));

const key = Symbol();

const obj2 = {
  [key]: "Some value",
};
console.log("obj[key]", obj2[key]);

const globalSy1 = Symbol.for("global");
const globalSy2 = Symbol.for("global");
console.log("globalSy1 ===globalSy2", globalSy1 === globalSy2);
console.log(Symbol.keyFor(globalSy1));

const product = {
  name: "Google Pixel 3",
  price: 500,
  [Symbol.toPrimitive](hint){
	console.log('hint', hint);
	return JSON.stringify(product);

	const hints={
		string(){return product.name},
		number(){return product.price},
	}
	return hints[hint];
  }
};

console.log(String(product));
