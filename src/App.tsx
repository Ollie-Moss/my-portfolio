import Header from './components/Header'
import Welcome from './components/WelcomeSection'

function App() {
    return (
        <div className="transition-colors text-base text-bg dark:text-white bg-white dark:bg-bg min-w-full min-h-[100vh]" >
            <Header />
            <main className='flex flex-col px-6 py-3 md:px-16 md:py-6'>
                <Welcome />

            </main>
        </div>
    )
}

export default App
