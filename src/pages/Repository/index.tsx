import { FiChevronLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import logoImg from '../../assets/logo-img.svg';
import { Header, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Logo Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>Rocket</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              tenetur modi,{' '}
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>111</strong>
            <span>111</span>
          </li>
          <li>
            <strong>111</strong>
            <span>111</span>
          </li>
          <li>
            <strong>111</strong>
            <span>111</span>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  );
};

export default Repository;
