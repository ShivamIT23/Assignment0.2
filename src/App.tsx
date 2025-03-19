// App.jsx
import  { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import UsersSection from './components/UsersSection';

// Lazy load the contact form for performance
const ContactForm = lazy(() => import('./components/ContactForm'));

function App() {
  return (
    <div className="font-sans text-gray-800 antialiased">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <UsersSection />
      <Suspense fallback={<div className="text-center py-10 text-lg text-gray-600">Loading form...</div>}>
        <ContactForm />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;