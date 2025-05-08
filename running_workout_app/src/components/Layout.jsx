export default function Layout(props) {
    
    const { children } = props // body
    const header = (
        <header>
            <h1 className="text-gradient">Running Workout App</h1>
            <p><strong>Simple Running Workouts For Anyone</strong></p>
        </header>
    )
    const footer = (
        <footer>
            <p>By: <a href="https://www.linkedin.com/in/charles-sirich/" target="_blank">Charles Sirichoktanasup</a></p>
        </footer>
    )

    return (
        <>
        { header }
        { children }
        { footer }
        </>
    )
}