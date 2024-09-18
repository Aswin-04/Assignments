import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect( () => async () => {
    const response  = await axios.get("http://localhost:3000/api/v1/users/bulk/?filter=" + filter)
    setUsers(response.data.users)
  }, [filter])

  return (
    <div className="">
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          className="w-full px-2 py-1 border rounded border-slate-200"
          type="text"
          placeholder="Search users"
          onChange={(e) => {
            setFilter(e.target.value)
          } }
        />
      </div>
      {users.map((user) => (
        <User user={user} key={user._id}/>
      ))}
    </div>
  );
};

function User({ user }) {

  const navigate = useNavigate()
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
        <Button label={"Send Money"} onClick={() => {navigate("/send?id=" + user._id + "&name=" + user.firstName)}}/>
      </div>
    </div>
  );
}

export default Users;
