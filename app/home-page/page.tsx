
import StudyPrograms from './components/study-programs';
import VguPartners from '../global-components/vgu-partners';
import VguToday from './components/vgu-today';
import VirtualTour from '../global-components/virtual-tour';
import ServerHeroSection from './components/hero-section-server';
import ServerVguInFigures from './components/vgu-in-figures-server';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <ServerHeroSection id="landing-page-carousel"/>
      <StudyPrograms />
      <ServerVguInFigures />
      <VguToday />
      <VguPartners />
      <VirtualTour />
      {/* <Footer /> */}
    </main>
  );
}
