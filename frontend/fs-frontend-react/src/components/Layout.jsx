import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../Layout.css'

const Layout = () => {
    return (
        <div className="layout">
            <header>
                    <div className="logo">
                        <h1>Postings</h1>
                    </div>
                <nav>

                    <ul className='nav-left'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="">About</Link>
                        </li>
                    </ul>
                    <ul className='nav-right'>

                        <li>
                            <Link to="/create">New Post</Link>
                        </li>
                        <li>
                            <Link to="/">Register</Link>
                        </li>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
                
            </main>
            <footer>
                <p>My Postings React App</p>
            </footer>
        </div>
    );
};

export default Layout;
