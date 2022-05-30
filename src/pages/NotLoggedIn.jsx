import { Link } from 'react-router-dom';
import ContainerForPageContent from './../components/containers/ContainerForPageContent';

function NotLoggedIn() {
  return (
    <>
      <ContainerForPageContent>
        <h2>Jūs esate neprisijungęs</h2>
        <p>Prašome prisijungti, kad pasiektumėte turinį.</p>
        <Link to='/login'>Prisijungti</Link>
      </ContainerForPageContent>
    </>
  );
}
export default NotLoggedIn;
