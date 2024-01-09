import React from "react";

export default function Header(props) {
    if (props.data) {
        var name = props.data.name;
        var description = props.data.description;

        var skills = props.data.skills.map(function (skills) {
            return (
                <p key={skills.name} className="skillsLogo">
                    <img
                        src={`images/skills/${skills.img}`}
                        alt={skills.name}
                    />
                </p>
            );
        });
    }

    return (
        <header id="home" className="headerImg">
            <nav id="nav-wrap">
                <a
                    className="mobile-btn"
                    href="#nav-wrap"
                    title="Show navigation"
                >
                    Show navigation
                </a>
                <a className="mobile-btn" href="#home" title="Hide navigation">
                    Hide navigation
                </a>

                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#home">
                            Principal
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about">
                            Sobre mim
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#resume">
                            Resumo
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#portfolio">
                            Portfólios
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">{name}</h1>
                    <h3>{description}.</h3>
                    <div className="skillsContainer">{skills}</div>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="icon-down-circle"></i>
                </a>
            </p>
        </header>
    );
}
