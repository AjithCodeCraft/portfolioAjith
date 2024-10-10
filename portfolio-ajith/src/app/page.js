// pages/index.js (or pages/page.js)
import HeroTexts from '@/components/Home';
import Sidebar from '../components/Sidebar';
import { HeroHighlight } from '@/components/ui/hero-highlight';

export default function Home() {
    return (
        <div className="flex bg-black min-h-screen">
          <Sidebar />
          <HeroHighlight className="flex-1"> {/* Wrap HeroTexts with HeroHighlight */}
            <HeroTexts />
          </HeroHighlight>
        </div>
    );
}
