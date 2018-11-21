import React from "react";
import PropTypes from "prop-types";

import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const MapNodeCard = ({ title, subtitle, text, buttons = null }) => (
    <Card>
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
            <CardText>{text}</CardText>
            {buttons && buttons.map(({ id, action, text }) => <Button key={`MapNodeCard-${title}-${id}`} onClick={action}>{text}</Button>)}
        </CardBody>
    </Card>
);

export default MapNodeCard;

MapNodeCard.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttons: PropTypes.array,
    text: PropTypes.string
};
