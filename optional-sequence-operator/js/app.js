/** @format */

const res = {
  success: true,
  data: {
    user: {
      first_name: "Vova",
      last_name: "Orlovsky",
      balance: 100,
		// getName(){return `${this.first_name} ${this.last_name}`},
    },
  },
};

// const firstName = res.data &&  res.data.user ? res.data.user.first_name : "Default";
// const {data: {user:{first_name = 'Default'} = {}}={}} =res;
// console.log(first_name);

const firstName = res?.data?.user?.first_name || "Default";
console.log(firstName);

console.log(res?.data?.user.getName?.());

const arr =[]
console.log(arr?.[0]?.[0]);