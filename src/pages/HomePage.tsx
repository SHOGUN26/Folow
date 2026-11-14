import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import DashboardPreview from "../components/DashboardPreview";
import Features from "../components/Features";
import Overview from "../components/Overview";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";






export default function HomePage() {
    return (
        <div className="min-h-screen min-w-[1348px] bg-surface text-ink">
            <Navbar />
            <main>
                <Hero />
                <DashboardPreview />
                <Features />
                <Overview />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}