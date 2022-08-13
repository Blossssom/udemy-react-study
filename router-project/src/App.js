import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <div>
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={<Navigate replace to="/quotes" />} />
              <Route path='/quotes' element={<AllQuotes />} />
              <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
                <Route path='comments' element={<Comments />} />
              </Route>
              <Route path='/new-quote' element={<NewQuotes />} />
            </Routes>
          </div>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
