import Navbar from "../components/Navbar";
import "../styles/index.css";
import "../styles/navbar.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}
