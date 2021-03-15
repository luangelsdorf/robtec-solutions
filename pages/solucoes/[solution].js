import HeadContent from "../../src/components/HeadContent";
import Header from "../../src/components/Header";
import data from '../../src/data/home.json'
import SolucaoBanner from "../../src/components/solucao/SolucaoBanner";
import SolucaoSection from "../../src/components/solucao/SolucaoSection";
import Form from "../../src/components/Form";
import Footer from "../../src/components/Footer";
import Relacionados from "../../src/components/solucao/Relacionados";


export default function Solution({ solutionProps }) {
    let produtos = solutionProps.produtos
    let flexOrder = true;
    return (
        <div className="container-fluid p-0">
            <HeadContent title={`${solutionProps.displayText} - Robtec`} />
            <Header />
            <SolucaoBanner bannerImg={solutionProps.name} />
            <div className="container">
                {
                    produtos.map(produto => {
                        flexOrder = !flexOrder
                        return (
                            <SolucaoSection
                                key={`section-${produto.id}`}
                                img={produto.img}
                                heading={produto.heading}
                                description={produto.description}
                                order={Number(flexOrder)}

                            />
                        )
                    })
                }
                <Relacionados cards={solutionProps.relacionados} />
                <Form />
            </div>
            <Footer />
        </div>
    )
}

export async function getStaticPaths() {
    const paths = data.map((solution) => ({
        params: { solution: solution.name }
    }))
    return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
    let solutionProps = data.find(x => x.name === params.solution)
    return {
        props: {
            solutionProps
        }
    }
}