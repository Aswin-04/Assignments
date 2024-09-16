import {
  Heading,
  SubHeading,
  InputBox,
  Button,
  BottomWarning,
} from "../components";

const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col ">
        <div className="p-2 px-4 w-80 bg-white rounded-lg shadow-sm">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox label={"Email"} placeholder={"aswin@gmail.com"} />
          <InputBox label={"Password"} placeholder={"12345678"} />
          <div className="pt-4">
            <Button label={"Sign in"} />
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
