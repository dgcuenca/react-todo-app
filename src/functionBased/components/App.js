import { Route, Routes } from 'react-router-dom';
import About from '../pages/about';
import NotMatch from '../pages/notMatch';
import TodoContainer from './todoContainer';
import Navbar from './navbar';
import AboutApp from '../pages/aboutApp';
import AboutAuthor from '../pages/aboutAuthor';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />}>
          <Route path="about-app" element={<AboutApp />} />
          <Route path="about-author" element={<AboutAuthor />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}