import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import CandidateDashboard from './pages/CandidateDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import ProductsPage from './pages/ProductsPage';
import SolutionsPage from './pages/SolutionsPage';
import SolutionTemplate from './pages/SolutionTemplate';
import PricingPage from './pages/PricingPage';
import ProductTemplate from './pages/ProductTemplate';
import CaseStudyTemplate from './pages/CaseStudyTemplate';
import CaseStudiesListPage from './pages/CaseStudiesListPage';
import BookDemo from './pages/BookDemo';
import LoginPage from './pages/LoginPage';
import IntegrationsPage from './pages/IntegrationsPage';
import BlogPage from './pages/BlogPage';
import { productsData } from './data/productsData';
import { caseStudiesData } from './data/caseStudiesData';
import { solutionsData } from './data/solutionsData';

function App() {
  const [view, setView] = useState('landing');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const currentState = window.history.state;
    if (!currentState || !currentState.view) {
      window.history.replaceState({ view: 'landing' }, '');
    } else if (currentState.view !== view) {
      setView(currentState.view);
    }

    const handlePopState = (event) => {
      const stateView = event.state?.view;
      setIsDemoModalOpen(false);
      setView(stateView || 'landing');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [view]);

  const handleSetView = (newView) => {
    if (newView === 'book-demo') {
      setIsDemoModalOpen(true);
      return;
    }

    window.history.pushState({ view: newView }, '');
    setView(newView);
    setIsDemoModalOpen(false);
  };

  const isAuthPage = view === 'candidate' || view === 'recruiter';

  const renderView = () => {
    if (productsData[view]) {
      return <ProductTemplate data={productsData[view]} setView={handleSetView} />;
    }

    if (solutionsData[view]) {
      return <SolutionTemplate data={solutionsData[view]} setView={handleSetView} />;
    }

    if (view === 'case-studies-list') {
      return <CaseStudiesListPage setView={handleSetView} />;
    }

    if (view.startsWith('case-study-')) {
      const id = view.replace('case-study-', '');
      return <CaseStudyTemplate data={caseStudiesData[id]} setView={handleSetView} />;
    }

    switch (view) {
      case 'candidate':
      case 'recruiter':
        return <LoginPage setView={handleSetView} />;
      case 'products':
        return <ProductsPage />;
      case 'solutions':
        return <SolutionsPage setView={handleSetView} />;
      case 'pricing':
        return <PricingPage />;
      case 'integrations':
        return <IntegrationsPage setView={handleSetView} />;
      case 'blog':
        return <BlogPage />;
      case 'book-demo-standalone':
        return <BookDemo isModal={false} />;
      default:
        return <LandingPage setView={handleSetView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!isAuthPage && <Navbar view={view} setView={handleSetView} />}
      <div className={`flex-grow ${!isAuthPage ? 'pt-16' : ''}`}>
        {renderView()}
      </div>
      {!isAuthPage && <Footer setView={handleSetView} />}

      <AnimatePresence>
        {isDemoModalOpen && (
          <BookDemo
            isModal={true}
            onClose={() => setIsDemoModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
