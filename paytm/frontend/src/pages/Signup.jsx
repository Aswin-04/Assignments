import { useState } from "react";
import axios from "axios";
import {
  Heading,
  SubHeading,
  InputBox,
  Button,
  BottomWarning,
} from "../components";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername ] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()


  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col ">
        <div className="p-2 px-4 w-80 bg-white rounded-lg shadow-sm">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox onChange={(e) => setFirstName(e.target.value)} label={"First Name"} placeholder={"John"} />
          <InputBox onChange={(e) => setLastName(e.target.value)} label={"Last Name"} placeholder={"Rambo"} />
          <InputBox onChange={(e) => setUsername(e.target.value)} label={"Email"} placeholder={"aswin@gmail.com"} />
          <InputBox onChange={(e) => setPassword(e.target.value)} label={"Password"} placeholder={"12345678"} />
          <div className="pt-4">
            <Button onClick={async () => {
              const response = await axios.post("http://localhost:3000/api/v1/users/signup/", {
                username,
                password,
                firstName,
                lastName
              })
              localStorage.setItem("token", response.data.token)
              navigate("/dashboard")
            }} label={"Sign up"} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
