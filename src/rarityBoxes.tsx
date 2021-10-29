import React from "react";
import { Container } from "reactstrap";

interface Props {
    text: string;
    color: string;
}

export const RarityBox: React.FC<Props> = ({text, color}) => {

    return (
        <Container className={color}>
            {text}
        </Container>
    )
}