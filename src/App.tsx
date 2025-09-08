import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import ProfilePicture from './components/Overview'
import Projects from './components/Projects'
import Welcome from './components/WelcomeSection'

function App() {
    return (
        <div className="z-10 transition-colors text-base text-bg dark:text-white bg-white dark:bg-bg min-w-full min-h-[100vh] h-fit flex flex-col" >
            <Header />
            <main className='h-fit flex flex-col gap-12 px-6 py-3 md:px-16 md:py-6'>
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Welcome />
                    <ProfilePicture />
                </div>
                <About />
                <Projects />
            </main>
            <Footer />
        </div>
    )
}

export default App
