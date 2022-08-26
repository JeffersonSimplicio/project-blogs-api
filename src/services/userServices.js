const { User } = require('../database/models');

async function create({ displayName, email, password, image }) {
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      displayName,
      email,
      password,
      image,
    },
  });

  console.log('user: ', user);
  console.log('created: ', created);

  if (!created) {
    return { message: 'User already registered' };
  }

  return user;
}

module.exports = {
  create,
};