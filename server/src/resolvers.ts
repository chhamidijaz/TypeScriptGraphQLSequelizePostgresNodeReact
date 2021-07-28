export {};
const resolvers = {
  Query: {
    async user(root: any, { id }: any, { models }: any) {
      return models.User.findByPk(id);
    },
    async users(root: any, args: any, { models }: any) {
      return models.User.findAll();
    },
  },
  Mutation: {
    async createUser(
      root: any,
      { id, name, email, role }: any,
      { models }: any
    ) {
      return models.User.create({
        id,
        name,
        email,
        role,
      });
    },

    updateUser: async (root: any, { id, name }: any, { models }: any) => {
      const user = await models.User.update(
        {
          name,
        },
        { where: { id } }
      );
      var message;
      if (user) message = "User updated successfully";
      else message = "Cannot find the User.";
      return message;
    },

    deleteUser: async (root: any, { id }: any, { models }: any) => {
      const user = await models.User.destroy({ where: { id } });
      var message;
      if (user) message = "User deleted successfully";
      else message = "Cannot find the User.";
      return message;
    },
  },
};

module.exports = resolvers;
