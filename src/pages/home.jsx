import Footer from '/src/components/footer.jsx';

const Home = () => {
    return (

    <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
            <span>hello world !</span>
            {/* contenu de la page d'accueil */}
        </main>
        <Footer />
    </div>

    );
};

export default Home;