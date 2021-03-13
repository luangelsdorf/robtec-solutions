setTimeout(() => {
    if (window.location.pathname === '/') {
        homePage()
    }
    if (window.location.pathname === '/seguranca') {
        productPage()
    }

    let config = {
        childList: true,
    }

    let mutationObserver = new MutationObserver(handleMutation)
    let target = document.querySelector('.container-fluid.p-0')
    mutationObserver.observe(target, config)

    function handleMutation() {
        if (window.location.pathname === '/') {
            homePage()
        }
        if (window.location.pathname === '/seguranca') {
            productPage()
        }
    }
})

let elements = ['banner', 'sobre-nos', 'proposito', 'solucoes', 'fale-conosco']

function homePage() {
    document.querySelector('video').addEventListener('contextmenu', e => {
        e.preventDefault()
    })
    /*~~ efeitos de hover ~~*/
    document.querySelectorAll('.produto').forEach(m => {
        m.addEventListener('mouseenter', e => {
            e.target.children[0].children[1].style.background = 'transparent';
            e.target.children[0].children[2].children[1].children[0].style.opacity = '1';
            e.target.children[0].children[2].children[1].children[0].style.transform = 'translateX(0px)';
        })
        m.addEventListener('mouseleave', e => {
            e.target.children[0].children[1].style.background = '';
            e.target.children[0].children[2].children[1].children[0].style.opacity = '0';
            e.target.children[0].children[2].children[1].children[0].style.transform = 'translateX(-10px)';
        })
    })

    document.querySelector('.banner-produto').addEventListener('mouseenter', e => {
        e.target.children[1].children[0].children[2].children[0].style.opacity = '1';
        e.target.children[1].children[0].children[2].children[0].style.transform = 'translateX(0px)';
    })
    document.querySelector('.banner-produto').addEventListener('mouseleave', e => {
        e.target.children[1].children[0].children[2].children[0].style.opacity = '0';
        e.target.children[1].children[0].children[2].children[0].style.transform = 'translateX(-10px)';
    })

    /*~~ intersection observer ~~*/
    let options = {
        rootMargin: '-120px 0px 0px 0px',
    }

    let intersectionObserver = new IntersectionObserver(handleIntersection, options)
    elements.forEach(elementId => {
        intersectionObserver.observe(document.querySelector(`#${elementId}`))
    })

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting === true) {
                let active = document.querySelector(`a[href="/#${entry.target.id}"]`)
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active')
                })
                active.classList.add('active')
            }
        })
    }
}

function productPage() {
    window.scrollTo(0, 0 )
    let active = document.querySelector('a[href="/#solucoes"]')
    document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active')
    })
    active.classList.add('active')
}