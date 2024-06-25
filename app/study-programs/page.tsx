
import HeroSection from './components/hero-section';
import ProgramTabs from './components/programs-tabs';
import InquiryForm from './components/inquiry-form';

import VguPartners from '../global-components/vgu-partners';
import ServerProgramTabs from './components/programs-tabs-server';


export default function Page() {
  return (
    <main>
      {/* <Header /> */}
      <HeroSection />
      <ServerProgramTabs />
      <InquiryForm />
      <VguPartners />
      {/* <Footer /> */}
    </main>
  );
}
