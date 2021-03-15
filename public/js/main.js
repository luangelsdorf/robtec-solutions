import {homePage, solutionPage} from "./pages.js";

document.addEventListener('DOMContentLoaded', () => {
    let path = window.location.pathname

    if (path === '/' || path.startsWith('/#')) {
        homePage()
    }

    if (path.startsWith('/solucoes')) {
        solutionPage()
    }
})
