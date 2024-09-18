import { useEffect, useState } from "react";
import {
  Heading,
  SubHeading,
  InputBox,
  Button,
  BottomWarning,
} from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col ">
        <div className="p-2 px-4 w-80 bg-white rounded-lg shadow-sm">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox label={"Email"} placeholder={"aswin@gmail.com"} onChange={(e) => setUsername(e.target.value)}/>
          <InputBox label={"Password"} placeholder={"12345678"} onChange={(e) => setPassword(e.target.value)} />
          <div className="pt-4">
            <Button label={"Sign in"} onClick={async () => {
              const response = await axios.post("http://localhost:3000/api/v1/users/signin/", {
                username,
                password
              })
              localStorage.setItem("token", response.data.token)
              navigate("/dashboard")
            }}/>
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
