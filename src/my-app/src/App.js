import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';

import { Header } from './components';
import { Registration, Login, AddPost} from '.pages';
import { Router } from 'express';

function App() {
    return (

      <Header>

          <Container maxWidth="lg">
              <Routes>
                    <Route path="/" element={Login} />
                    {<Registration />}
                    {<Login>}
                    {<AddPost>}
              </Routes>
          </Container>
          
      </Header>
);
}

export default App;
