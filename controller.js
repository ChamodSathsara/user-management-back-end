const users = [
  { id: 1, name: "prasad" },
  { id: 2, name: "prasadi" },
];

const getUsers = (cb) => {
  cb(users);
};

const getUserById = (id, cb) => {
  console.log(id);

  const user = users.find((user) => {
    user.id == id;
  });

  cb(user);
};

exports.getUserById = getUserById;
exports.getUsers = getUsers;
