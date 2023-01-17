import { Route, Routes } from 'react-router-dom';
import About from '../pages/about';
import NotMatch from '../pages/notMatch';
import TodoContainer from './todoContainer';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<NotMatch />} />
      </Routes>
  );
}