import React from "react";

const Navbar = () => {
    return (
        <nav className="ml-4 navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="w-100 d-flex justify-content-center">
                    <h1 className="navbar-brand text-center" style={{ fontFamily: 'Pacifico', fontSize: '30px' }}>
                        <p>No Fries Burger</p>
                        <p className="text-danger" style={{ fontFamily: 'Rubik Dirt', fontSize: '40px' }}>BLACKLIST</p>
                    </h1>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;