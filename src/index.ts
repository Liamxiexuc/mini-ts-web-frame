import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

// const user = User.buildUser({ name: "Jim", age: 20 });

// const root = document.querySelector("#root");

// if (root) {
//   const userEdit = new UserEdit(root, user);

//   userEdit.render();
//   console.log(userEdit);
// } else {
//   throw new Error("no root found");
// }
