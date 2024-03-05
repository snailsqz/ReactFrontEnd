import Proptypes from "prop-types";
export default function Contact(props) {
  return (
    <div>
      <h1>
        {props.email} {props.phone}
      </h1>
    </div>
  );
}

Contact.propTypes = {
  email: Proptypes.string.isRequired,
  phone: Proptypes.string.isRequired,
};

Contact.defaultProps = {
  email: "No email provided",
  phone: "No phone provided",
};
