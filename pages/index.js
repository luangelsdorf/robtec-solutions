import HeadContent from '../src/components/HeadContent'
import Header from "../src/components/Header";
import Banner from "../src/components/home/Banner";
import SobreNos from "../src/components/home/SobreNos";
import Proposito from "../src/components/home/Proposito";
import Form from "../src/components/Form";
import Footer from "../src/components/Footer";
import Produtos from '../src/components/home/Produtos';

export default function Home(props) {
    return (
        <div className="container-fluid p-0">
            <HeadContent title="Robtec Solutions" />
            <Header />
            <Banner />
            <div className="container" id="mainContent">
                <SobreNos />
                <Proposito />
                <Produtos produtos={props.produtos} />
                <Form />
            </div>
            <Footer />
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/resources/home')
    const produtos = await res.json()

    return {
        props: {
            produtos,
        },
    }
}