import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { CertificationsGallery } from "@/components/CertificationsGallery";
import { AutomationVisualizer } from "@/components/AutomationVisualizer";
import { SkillMatrix } from "@/components/SkillMatrix";
import { SpaceParticles } from "@/components/SpaceParticles";
import { ProjectCarousel } from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden selection:bg-accent-blue/30 selection:text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SpaceParticles />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-blue/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-cyan/5 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Hero Area with Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[60vh] items-center">
          <HeroSection />
          <div className="hidden lg:block h-[500px]">
            <AutomationVisualizer />
          </div>
        </div>

        <ProjectCarousel />

        <div className="space-y-16 pb-20">
          <ExperienceSection />
          <EducationSection />

          <div className="space-y-12">
            <CertificationsGallery />
            <SkillMatrix />
          </div>
        </div>
      </div>
    </main>
  );
}
