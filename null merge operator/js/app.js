/** @format */

const res = {
  success: true,
  data: {
    user: {
      first_name: "Vova",
      last_name: "Orlovsky",
      balance: null,
      getName() {
        return `${this.first_name} ${this.last_name}`;
      },
    },
  },
};

const {user} = res.data;
const balance = user.balance ?? 'none';
console.log(balance);