import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { homePage, solutionPage } from "../public/js/pages.js";


function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = url => {
            if (url === '/' || url.startsWith('/#')) {
                // handle main page
                homePage()
            }

            if (url.startsWith('/solucoes')) {
                //handle solution
                solutionPage()
            }
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])

    return <Component {...pageProps} />
}

export default MyApp
