import React from "react";

export default function About(props) {
    if (props.data) {
        var name = props.data.name;
        var profilepic = "images/" + props.data.image;
        var bio = props.data.bio;
        var city = props.data.address.city;
        var state = props.data.address.state;
        var email = props.data.email;
        var contatoGithub = props.data.contatoGithub;
        var contatoLinkedin = props.data.contatoLinkedin;
    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img
                        className="profile-pic"
                        src={profilepic}
                        alt="Minha foto de perfil"
                    />
                </div>
                <div className="nine columns main-col">
                    <h2>Sobre mim</h2>
                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contato</h2>
                            <p className="address">
                                <span>{name}</span>
                                <br />
                                <span>
                                    {city} {state}
                                </span>
                                <br />
                                <span>
                                    <i className="fa fa-envelope"></i>
                                    <a href={`mailto:${email}`}> {email}</a>
                                </span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a
                                    href={contatoGithub}
                                    className="button btn-contato"
                                >
                                    <i className="fa fa-github"></i>Acesse meu
                                    Github
                                </a>
                                <a
                                    href={contatoLinkedin}
                                    className="button btn-contato"
                                >
                                    <i className="fa fa-linkedin"></i>Acesse meu
                                    Linkedin
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
