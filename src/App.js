import {
  AppBar,
  Box,
  Button,
  Container,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

export const TaskList = ({ handleDel, list }) => {
  return (
    <div style={{ width: 350 }}>
      {list.map((task) => (
        <Box
          key={task}
          sx={{
            marginTop: 1,
            marginBottom: 1,
            border: '1px dashed #ececec',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ marginLeft: 2 }}>{task}</div>
          <div>
            <a onClick={() => handleDel(task)}>
              <ClearIcon style={{ color: '#b9b9b9' }} />
            </a>
          </div>
        </Box>
      ))}
    </div>
  );
};

function App() {
  const [taskList, setTaskList] = useState([]);

  const handleAddClick = () => {
    //TODO add click
  };

  const handleDelClick = (del) => {
    //TODO delete click
  };
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{ boxShadow: 1, width: 350, height: '80vh', overflow: 'scroll' }}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              TO DO
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ margin: 5 }}>
          <TextField multiline sx={{ width: 340 }} rows={6} />
        </div>
        <div>
          <Button color={'primary'} onClick={handleAddClick}>
            add
          </Button>
        </div>
        <div>
          <TaskList handleDel={handleDelClick} list={taskList} />
        </div>
      </Box>
    </Container>
  );
}

export default App;
