import NewsletterCopy from "./components/newsletter/NewsletterCopy";

import style from "./App.module.css";

function App() {
    return (
        <div className={`${style.container} ${style.theme}`}>
            <NewsletterCopy />
        </div>
    );
}

export default App;
