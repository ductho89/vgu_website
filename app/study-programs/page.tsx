import { sans } from '../ui/fonts';
import Header from '../global-components/header';
import HeroSection from './components/hero-section';
import ProgramTabs from './components/programs-tabs';
import InquiryForm from './components/inquiry-form';

import VguPartners from '../global-components/vgu-partners';
import Footer from '../global-components/footer';

export default function Page() {
  return (
    <main>
      {/* <Header /> */}
      <HeroSection />
      <ProgramTabs />
      <InquiryForm />
      <VguPartners />
      {/* <Footer /> */}
    </main>
  );
}
