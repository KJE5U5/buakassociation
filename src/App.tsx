import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import Partners from "./pages/Partners";
import AshdenAward from "./pages/AshdenAward";
import Model from "./pages/Model";
import Technology from "./pages/Technology";
import Impact from "./pages/Impact";
import Financials from "./pages/Financials";
import CarbonCredits from "./pages/CarbonCredits";
import Stories from "./pages/Stories";
import Invest from "./pages/Invest";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import WorkWithUs from "./pages/WorkWithUs";
import Replication from "./pages/Replication";
import MediaRoom from "./pages/MediaRoom";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import VisitUs from "./pages/VisitUs";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import Donate from "./pages/Donate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * ✅ Inline ScrollToTop Component
 * This triggers smooth scroll to top whenever route changes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/ashden-award-2024" element={<AshdenAward />} />
      <Route path="/our-model" element={<Model />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/impact-dashboard" element={<Impact />} />
      <Route path="/financials" element={<Financials />} />
      <Route path="/carbon-credits" element={<CarbonCredits />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="/work-with-us" element={<WorkWithUs />} />
      <Route path="/work-with-us/replication" element={<Replication />} />
      <Route path="/media-room" element={<MediaRoom />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/events" element={<Events />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/visit-us" element={<VisitUs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/model" element={<Model />} />
      <Route path="/join" element={<JoinUs />} />
      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
