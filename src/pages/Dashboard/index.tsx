import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo-github.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/60111139?s=460&v=4"
            alt="Thomaz"
          />
          <div>
            <strong>Thomaz201/gostack</strong>
            <p>Repositório Curso Rocketseat</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
