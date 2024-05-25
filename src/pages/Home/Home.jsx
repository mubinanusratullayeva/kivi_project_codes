import { ProductFetch } from "../components/ProductFetch";

import { Footer, FooterBody } from '../components/Footer'

import { Container } from '../components/Container';

export function Home() {
    return (
        <>
            <Container>

                <ProductFetch />

            </Container>

            <Footer />
            <FooterBody />
        </>
    )
}