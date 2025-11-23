import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Layout from './components/layout/Layout';

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));

// Placeholder components for other routes (can be lazy loaded as well when implemented)
const Landlords = () => <div style={{ padding: '2rem' }}>For Landlords</div>;
const Tenants = () => <div style={{ padding: '2rem' }}>For Tenants</div>;
const About = () => <div style={{ padding: '2rem' }}>About Us</div>;
const Login = () => <div style={{ padding: '2rem' }}>Login</div>;

// Loading component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: '#009B8A'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="landlords" element={<Landlords />} />
              <Route path="tenants" element={<Tenants />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
