import React from 'react';
import Header from 'components/Header';
import PaginaHome from 'components/PaginaHome';
import PaginaProduto from 'components/PaginaProduto';
import Footer from 'components/Footer';
import { Route, Switch } from 'react-router-dom'

function App() {
    React.useEffect(() => {
        const bootsJS = document.createElement('script');
        bootsJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js';
        document.body.appendChild(bootsJS);
    }, [])

    return (
        <div className="container-fluid p-0">
            <Header />
                <Switch>
                    <Route path="/seguranca" component={PaginaProduto} />
                    <Route path="/" component={PaginaHome} />
                </Switch>
            <Footer />
        </div>
    );
}

export default App;
