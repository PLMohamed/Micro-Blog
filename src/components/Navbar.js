import React from "react";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className="navbar container">
            <div className="navbar-brand">
                <a onClick={() => router.push("/")}>
                    <span className="color-effect">Micro</span> Blog
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-item">
                    <a onClick={() => router.push("/")}>Home</a>
                </div>
                <div className="navbar-item">
                    <a onClick={() => router.push("/about")}>About</a>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <a
                        className="btn btn-primary"
                        onClick={() => router.push("/new")}
                    >
                        New Post
                    </a>
                </div>
            </div>
        </nav>
    );
}
