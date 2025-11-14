import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import Stats from "@/components/Stats";
import Plans from "@/components/Plans";
import Tech from "@/components/Tech";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/ui/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturesSection />
            <Stats />
            <Plans />
            <Tech />
            <Testimonials />
            <FaqSection />
            <CallToAction />
        </>
    );
}
