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

let nextId = 0;

export const TaskList = ({ handleDel, list }) => {
  return (
    <div style={{ width: 350 }}>
      {list.map((task, i) => (
        <Box
          key={task.id}
          sx={{
            marginTop: 1,
            marginBottom: 1,
            border: '1px dashed #ececec',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ marginLeft: 2 }}>{task.text}</div>
          <div>
            <a onClick={() => handleDel(task.id)}>
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
  const [text, setText] = useState('');

  const handleAddClick = () => {
    setTaskList((prev) => [...prev, { id: nextId++, text }]);
    setText('');
  };

  const handleDelClick = (id) => {
    setTaskList((prev) => {
      return prev.filter((task) => task.id !== id);
    });
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
          <TextField
            multiline
            sx={{ width: 340 }}
            rows={6}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <Button disabled={!text} color={'primary'} onClick={handleAddClick}>
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
