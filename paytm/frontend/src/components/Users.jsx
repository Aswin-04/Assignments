import { useState } from "react";
import Button from "./Button";

const Users = () => {
  const [users, setUsers] = useState([
    {
      firstName: "Harkirat",
      lastName: "Singh",
      _id: 1,
    },
  ]);

  return (
    <div className="">
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          className="w-full px-2 py-1 border rounded border-slate-200"
          type="text"
          placeholder="Search users"
        />
      </div>
      {users.map((user) => (
        <User user={user} key={user._id}/>
      ))}
    </div>
  );
};

function User({ user }) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className="h-12 w-12 flex justify-center items-center  rounded-full bg-slate-200 mt-1 mr-2">
          <div className="">{user.firstName[0].toUpperCase()}</div>
        </div>
        <div className="">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div className="">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
}

export default Users;
