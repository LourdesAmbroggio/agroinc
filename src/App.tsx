import React, { FC } from 'react';
import useTheme from 'hooks/useTheme';
import { Text } from './components/atoms';
import './styles/style.less';
import { Home } from 'pages';

const App: FC = () => {
  const theme = useTheme();
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
