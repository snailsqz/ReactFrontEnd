function Hello({ name, surname }) {
  return (
    <div>
      <h1>Hello {name + " " + surname}</h1>
    </div>
  );
}

import Proptypes from "prop-types";

Hello.propTypes = {
  name: Proptypes.string.isRequired,
  surname: Proptypes.string.isRequired,
};

Hello.defaultProps = {
  name: "John",
  surname: "Doe",
};

export default Hello;
