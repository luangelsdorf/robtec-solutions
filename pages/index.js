import HeadContent from '../src/components/HeadContent'
import Header from "../src/components/Header";
import Banner from "../src/components/home/Banner";
import SobreNos from "../src/components/home/SobreNos";
import Proposito from "../src/components/home/Proposito";
import Form from "../src/components/Form";
import Footer from "../src/components/Footer";
import Solucoes from '../src/components/home/Solucoes';
import data from '../src/data/home.json';

export default function Home(props) {

    return (
        <div className="container-fluid p-0">
            <HeadContent title="Robtec Solutions" />
            <Header />
            <Banner />
            <div className="container" id="mainContent">
                <SobreNos />
                <Proposito />
                <Solucoes solucoes={props.data} />
                <Form />
            </div>
            <Footer />
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            data,
        },
    }
}