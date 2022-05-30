import PropTypes from 'prop-types';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import NotLoggedIn from '../pages/NotLoggedIn';

function ProtectedRoute({ children }) {
  const authCtx = useContext(AuthContext);
  if (authCtx.isLoggedIn) {
    return children;
  } else {
    return <NotLoggedIn />;
  }
}
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoute;
