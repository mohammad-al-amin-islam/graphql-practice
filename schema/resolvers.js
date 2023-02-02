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
  Mutation: {
    createUser: (parent, arg) => {
      const input = arg.input;
      const last = UserList[UserList.length - 1].id;
      input.id = last + 1;
      UserList.push(input);
      return input;
    },

    updateUser: (parent, arg) => {
      const { id, newUserName } = arg.input;
      let updateUsername;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUserName;
          updateUsername = user;
        }
      });

      return updateUsername;
    },
    deleteUser: (parent, arg) => {
      const id = arg.id;
      let updateUser;
      const newlist = UserList.filter((user) => user.id !== Number(id));
      updateUser = newlist;
      return null;
    },
  },
};

module.exports = { resolvers };
