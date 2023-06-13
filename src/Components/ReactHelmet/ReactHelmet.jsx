import React from 'react';
import { Helmet } from 'react-helmet-async';

const ReactHelmet = ({title}) => {
    return (
        <Helmet>
            <title>{title} | Shutter Sense</title>
        </Helmet>
    );
};

export default ReactHelmet;