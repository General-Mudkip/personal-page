const Navbar = () => {
    return(
        <div className="align-top flex flex-row justify-center gap-x-16 relative
                        text-blue-500 text-2xl underline decoration-2 underline-offset-4">
            <a className="nav-link" href="#">about</a>
            <a className="nav-link" href="#">contact</a>
            <a className="nav-link" href="#">projects</a>
        </div>
    );
}

export default Navbar;