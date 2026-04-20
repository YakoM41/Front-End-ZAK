import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-tf-dark-bg text-tf-text-light py-16 px-6">
            <div className="container mx-auto">
                {/* --- SECTION PRINCIPALE (GRILLE) --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Logo et Description */}
                    <div className="space-y-4">
                        <img 
                            src="/images/logo-taskflow.svg" 
                            alt="TaskFlow Logo" 
                            className="w-60 h-auto"
                        />
                        <p className="text-sm leading-relaxed max-w-xs pt-2">
                            Organisez vos projets, boostez votre productivité. Un système de gestion de projet moderne conçu pour des équipes qui décollent.
                        </p>
                    </div>

                    {/* Colonne RESSOURCES */}
                    <div className="space-y-5 pt-5">
                        <h4 className="text-tf-text-accent font-bold text-sm uppercase tracking-wider">Ressources</h4>
                        <ul className="space-y-3">
                            <FooterLink to="/support">Support</FooterLink>
                            <FooterLink to="/contact">Contact</FooterLink>
                            <FooterLink to="/documentation">Documentation</FooterLink>
                        </ul>
                    </div>

                    {/* Colonne LÉGAL */}
                    <div className="space-y-5 pt-5">
                        <h4 className="text-tf-text-accent font-bold text-sm uppercase tracking-wider">Légales</h4>
                        <ul className="space-y-3">
                            <FooterLink to="/mentions-legales">Mentions Légales</FooterLink>
                            <FooterLink to="/privacy">Politique de confidentialité</FooterLink>
                            <FooterLink to="/cgu">CGU</FooterLink>
                        </ul>
                    </div>

                    {/* Colonne RESEAUX */}
                    <div className="space-y-5 pt-5">
                        <h4 className="text-tf-text-accent font-bold text-sm uppercase tracking-wider">Reseaux</h4>
                        <div className="flex gap-3 pt-2">
                            <SocialIcon icon={<Github size={24} />} href="https://github.com" />
                            <SocialIcon icon={<Linkedin size={24} />} href="https://linkedin.com" />
                            <SocialIcon icon={<Twitter size={24} />} href="https://twitter.com" />
                        </div>
                    </div>
                </div>

                {/* --- BARRE DE COPYRIGHT --- */}
                <div className="pt-8 border-t border-slate-700 text-center">
                    <p className="text-xs text-tf-text-accent">
                        © 2026 TaskFlow. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

/* --- SOUS-COMPOSANTS UTILITAIRES --- */

const FooterLink = ({ to, children }) => (
    <li>
        <Link
            to={to}
            className="text-tf-text-light hover:text-white transition-colors duration-200"
        >
            {children}
        </Link>
    </li>
);

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-tf-text-light hover:bg-slate-600 hover:text-white transition-all duration-300"
    >
        {icon}
    </a>
);

export default Footer;