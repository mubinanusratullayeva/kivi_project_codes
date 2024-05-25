import { Navbar } from "../components/Navbar";

export function Layout({ token, setToken, children }) {
    return (
        <>

            <Navbar token={token} setToken={setToken} />

            {children}

        </>
    )
}
