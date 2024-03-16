import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { useState } from "react";
export function LoginPage() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError(!isPatternMatch());
    console.log(event.target.value)
  };
  const isPatternMatch = () => {
    // Define the pattern
    const pattern = /^ejfesgvf$/;

    // Check if the input value matches the pattern
    return pattern.test(inputValue);
  };
  return (
    <>
      <Card className="mt-20" color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Login.
        </Typography>
        <form
          method="post"
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
        >
          <div className="mb-1 flex flex-col gap-6">
            {/* <Typography variant="h6" color="blue-gray" className="mb-0">
              Your Email
            </Typography>
            <Input
              type="email"
              size="lg"
              placeholder="example@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            /> */}
            {/* <p className="error">httyx</p> */}
            <Typography variant="h6" color="blue-gray" className="mb-0">
              Password
            </Typography>
            <Input
              type="text"
              pattern="ejfesgvf"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleInputChange}
            />
            {/* {isPatternMatch() ? null : <span>hi there</span>} */}
            {error && <span>hi there</span>}

          </div>

          <Button type="submit" className="mt-6" fullWidth>
            Login
          </Button>
          <Button
            onClick={() => console.log("clicked")}
            color="red"
            className="mt-6"
            fullWidth
          >
            Google Login
          </Button>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Create account?{" "}
            <Link to="/signup" className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </>
  );
}
