
import StudyPrograms from './components/study-programs';
import VguInFigures from './components/vgu-in-figures';
import VguPartners from '../global-components/vgu-partners';
import VguToday from './components/vgu-today';
import HeroSection from './components/hero-section';
import VirtualTour from '../global-components/virtual-tour';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <HeroSection />
      <StudyPrograms />
      <VguInFigures />
      <VguToday />
      <VguPartners />
      <VirtualTour />
      {/* <Footer /> */}
    </main>
  );
}
