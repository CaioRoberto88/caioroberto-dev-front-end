import React from "react";

export default function Resume(props) {
    if (props.data) {
        var skillmessage = props.data.skillmessage;
        var education = props.data.education.map(function (education) {
            return (
                <div key={education.school}>
                    <h3>{education.school}</h3>
                    <p className="info">
                        {education.degree} <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                </div>
            );
        });

        var skills = props.data.skills.map((skills) => {
            var className = "bar-expand " + skills.name.toLowerCase();
            return (
                <li key={skills.name}>
                    <span
                        style={{
                            width: skills.level,
                            backgroundColor: "#740001",
                        }}
                        className={className}
                    ></span>
                    <em>{skills.name}</em>
                </li>
            );
        });
    }

    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Formação/Cursos</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">{education}</div>
                    </div>
                </div>
            </div>

            <div className="row skill">
                <div className="three columns header-col">
                    <h1>
                        <span>Habilidades</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <p>{skillmessage}</p>
                    <div className="bars">
                        <ul className="skills">{skills}</ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
