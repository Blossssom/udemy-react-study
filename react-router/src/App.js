import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/landing' />} />
          <Route path='/landing/*' element={<Landing />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetail />} />  
          
        </Routes>
      </main>
    </div>
  );
}

export default App;
