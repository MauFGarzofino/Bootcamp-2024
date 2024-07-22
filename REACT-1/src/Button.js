import PropTypes from 'prop-types';

export default function Button({ children, onClick, id, className }) {
  return (
    <button id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
};
