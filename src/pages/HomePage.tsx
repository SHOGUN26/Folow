import { useState } from "react";
import CallToAction from "../components/CallToAction";
import DashboardPreview from "../components/DashboardPreview";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LoginModal from "../components/LoginModal";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import type { AuthView } from "../types/auth";

export default function HomePage() {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [authView, setAuthView] = useState<AuthView>("login");

    const openLogin = () => {
        setAuthView("login");
        setIsAuthOpen(true);
    };
    const openSignup = () => {
        setAuthView("signup");
        setIsAuthOpen(true);
    };

    return (
        <div className="min-h-screen min-w-[1348px] bg-surface text-ink">
            <Navbar onSignupClick={openSignup} onLoginClick={openLogin} />
            <main>
                <Hero onStartClick={openLogin} />
                <DashboardPreview />
                <Features />
                <Overview />
                <CallToAction onSignupClick={openSignup} />
            </main>
            <Footer />
            <LoginModal
                isOpen={isAuthOpen}
                view={authView}
                onClose={() => setIsAuthOpen(false)}
                onViewChange={setAuthView}
            />
        </div>
    );
}