const NavBar = () => {
    return <div>
        <div id="nav-parent" className="nav col w-100">
            <div id="nav" className="float-end align-middle">
                <a className="active" href="/">Portfolio</a>
                <a href="/articles">Articles</a>
                <a href="/resume">Resume</a>
                <a href="/about">About</a>
                <a id="linkedin" href="https://linkedin.com/in/connorstevens26" className="btn btn-outline-primary">
                    LinkedIn
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
            </div>
        </div>
    </div>
}

export default NavBar;