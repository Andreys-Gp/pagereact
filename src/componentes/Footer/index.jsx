import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/brian.gp.96/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://github.com/Andreys-Gp'>
                <img src="/img/mark-github.svg" alt='gitHub' />
            </a>
            <a href='https://www.instagram.com/brayanandreysgonzalez/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
            
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado Andreys Gp</strong>
    </footer>
}

export default Footer