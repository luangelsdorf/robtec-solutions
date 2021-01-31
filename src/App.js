import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import SobreNos from 'components/SobreNos';
import Proposito from 'components/Proposito';
import FormMap from 'components/FormMap';
import Footer from 'components/Footer';

function App() {
  React.useEffect(() => {
    const bootsJS = document.createElement('script');
    bootsJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(bootsJS);
  }, [])

  return (
    <div>
      <Header />
      <main>
          <Banner />
          <SobreNos />
          <Proposito />
          <FormMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
