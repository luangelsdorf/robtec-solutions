function homePage() {
    document.querySelector('video').addEventListener('contextmenu', e => {
        e.preventDefault()
    })

    let options = {
        rootMargin: '-120px 0px 0px 0px',
    }

    let elements = ['banner', 'sobre-nos', 'proposito', 'solucoes', 'fale-conosco']

    let intersectionObserver = new IntersectionObserver(handleIntersection, options)
    elements.forEach(elementId => {
        intersectionObserver.observe(document.querySelector(`#${elementId}`))
    })

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting === true) {
                let active = document.querySelector(`a[href="#${entry.target.id}"]`)
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active')
                })
                active.classList.add('active')
            }
        })
    }
}

function solutionPage() {

}


export { homePage, solutionPage }