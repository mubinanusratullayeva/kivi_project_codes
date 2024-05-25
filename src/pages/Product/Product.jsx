// import { useParams } from "react-router-dom";
import { Container } from "../components/Container";

import { Footer, FooterBody } from "../components/Footer";

export function Product() {

    // const paramsIdOfLink = useParams();

    // fetch('https://fakestoreapi.com/products')
    //     .then(res => res.json())
    //     .then(data => {

    //     })

    return (
        <>

            <section>
                <Container>
                    <h2>Срочно Голден Хаус Етти Чинор Новостройка 4х ком на 1 этаже юнусабад 5</h2>
                </Container>
            </section>

            <Footer>
                <FooterBody />
            </Footer>
        </>
    )
}