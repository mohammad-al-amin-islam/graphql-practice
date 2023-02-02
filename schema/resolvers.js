const { UserList, MovieList } = require("../data/fakeData");

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, arg) => {
      const id = arg.id;
      console.log(id);
      const res = UserList.find((user) => user.id == Number(id));
      return res;
    },
    allTime: () => {
      return MovieList;
    },
    singleTime: (parent, arg) => {
      const id = arg.name;
      const res = MovieList.find((user) => user.name.includes(id));
      return res;
    },
  },
};

module.exports = { resolvers };
