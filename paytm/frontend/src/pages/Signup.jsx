import {
  Heading,
  SubHeading,
  InputBox,
  Button,
  BottomWarning,
} from "../components";

const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col ">
        <div className="p-2 px-4 w-80 bg-white rounded-lg shadow-sm">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox label={"First Name"} placeholder={"John"} />
          <InputBox label={"Last Name"} placeholder={"Rambo"} />
          <InputBox label={"Email"} placeholder={"aswin@gmail.com"} />
          <InputBox label={"Password"} placeholder={"12345678"} />
          <div className="pt-4">
            <Button label={"Sign up"} />
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
