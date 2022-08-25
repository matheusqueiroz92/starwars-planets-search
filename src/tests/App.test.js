import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import StarWarsProvider from '../context/StarWarsProvider';
import userEvent from '@testing-library/user-event';

describe('Testando o componente Table', () => {
  test('testando se existe os inputs dos filtros', () => {
    render(<App />);
    const inputName = screen.getByLabelText(/nome:/i);
    const inputColumn = screen.getByLabelText(/coluna:/i);
    const inputComparison = screen.getByLabelText(/operador:/i);
    const inputValue = screen.getByLabelText(/valor:/i);

    expect(inputName).toBeInTheDocument();
    expect(inputColumn).toBeInTheDocument();
    expect(inputComparison).toBeInTheDocument();
    expect(inputValue).toBeInTheDocument();
  });

  test('Testando o filtro por nome', async () => {
    render(<StarWarsProvider><App /></StarWarsProvider>);
    const inputSearch = await screen.findByTestId('name-filter');
    const planetSearch = await screen.findByText(/tatooine/i);

    expect(inputSearch).toBeDefined();
    expect(planetSearch).toBeInTheDocument();

    userEvent.type(inputSearch, 'tatoo');
    expect(inputSearch).toHaveProperty('value', 'tatoo');
  });

  test('Testando todos os filtros', async () => {
    render(<StarWarsProvider><App /></StarWarsProvider>);
    const inputColumn = await screen.findByTestId('column-filter');
    const column = await screen.findByText('rotation_period');
    const inputComparison = await screen.findByTestId('comparison-filter');
    const comparison = await screen.findByText('menor que');
    const inputValue = await screen.findByTestId('value-filter');
    const btnFilter = await screen.getByTestId('button-filter');

    expect(inputColumn).toBeDefined();
    expect(inputComparison).toBeDefined();
    expect(inputValue).toBeDefined();

    userEvent.selectOptions(inputColumn, column);
    userEvent.selectOptions(inputComparison, comparison);
    userEvent.type(inputValue, '23');
    userEvent.click(btnFilter);

    expect(inputColumn).toHaveProperty('value', 'population');
    expect(inputComparison).toHaveProperty('value', 'maior que');
    expect(inputValue).toHaveProperty('value', '0');
  });

  test('testando o cabeçalho da tabela de planetas', () => {
    render(<App />);
    const nameColumn = screen.getByRole('columnheader', {
      name: /name/i
    });
    const rotationPeriodColumn = screen.getByRole('columnheader', {
      name: /rotation period/i
    });
    const orbitalPeriodColumn = screen.getByRole('columnheader', {
      name: /orbital period/i
    });
    const diameterColumn = screen.getByRole('columnheader', {
      name: /diameter/i
    });
    const climateColumn = screen.getByRole('columnheader', {
      name: /climate/i
    });
    const gravityColumn = screen.getByRole('columnheader', {
      name: /gravity/i
    });
    const terrainColumn = screen.getByRole('columnheader', {
      name: /terrain/i
    });
    const surfaceWaterColumn = screen.getByRole('columnheader', {
      name: /surface water/i
    });
    const populationColumn = screen.getByRole('columnheader', {
      name: /population/i
    });
    const filmsColumn = screen.getByRole('columnheader', {
      name: /films/i
    });
    const createdColumn = screen.getByRole('columnheader', {
      name: /created/i
    });
    const editedColumn = screen.getByRole('columnheader', {
      name: /edited/i
    });
    const urlColumn = screen.getByRole('columnheader', {
      name: /url/i
    });
    
    expect(nameColumn).toBeInTheDocument();
    expect(rotationPeriodColumn).toBeInTheDocument();
    expect(orbitalPeriodColumn).toBeInTheDocument();
    expect(diameterColumn).toBeInTheDocument();
    expect(climateColumn).toBeInTheDocument();
    expect(gravityColumn).toBeInTheDocument();
    expect(terrainColumn).toBeInTheDocument();
    expect(surfaceWaterColumn).toBeInTheDocument();
    expect(populationColumn).toBeInTheDocument();
    expect(filmsColumn).toBeInTheDocument();
    expect(createdColumn).toBeInTheDocument();
    expect(editedColumn).toBeInTheDocument();
    expect(urlColumn).toBeInTheDocument();
  });
});

  // test('testando se ao digitar o nome a tabela é filtrada', () => {
  //   render(<App />);
  //   const nameInput = screen.getByTestId("name-filter");
  //   const planetSearch = screen.findByText(/tatooine/i);
  //   userEvent.type(nameInput, 'tatoo');
  //   expect(planetSearch).toHaveProperty('value', 'tatoo'); 
  // });
