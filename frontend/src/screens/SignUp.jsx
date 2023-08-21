import { FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="john" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="smith"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="email" name="email" defaultValue="john@gmail.com" />
        <FormRow type="password" name="password" defaultValue="Demon@1867!" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/signin" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default SignUp;
