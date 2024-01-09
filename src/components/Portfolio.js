import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    CardActionArea,
    Typography,
    Container,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        backgroundColor: theme.palette.primary.light,
    },
    card: {
        maxWidth: 250,
        margin: 0,
    },
    media: {
        height: 160,
    },
}));

export default function Portfolio(props) {
    const classes = useStyles();

    if (props.data) {
        var projects = props.data.projects.map(function (projects) {
            return (
                <div key={projects.title} className="columns portfolio-item">
                    <Card className="classes.card">
                        <CardActionArea href={projects.url}>
                            <iframe
                                width="100%"
                                height="200"
                                src={projects.image}
                                title="YouTube video player"
                                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            ></iframe>
                            <CardContent className="cardAltura">
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    {projects.title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {projects.category}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            );
        });
    }

    return (
        <section className={classes.root} id="portfolio">
            <Container className="row">
                <h1>Meus últimos projetos</h1>
                <div
                    id="portfolio-wrapper"
                    className="bgrid-quarters s-bgrid-thirds cf"
                >
                    {projects}
                </div>
            </Container>
        </section>
    );
}
