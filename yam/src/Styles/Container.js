import React from 'react';
import PropTypes from 'prop-types'; // vérifier les props qui rentre dans le composant

import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: .5rem;
    margin : 0 auto;
    width: 80%;
`;

// Container React c'est de la composition => permet de définir une strucrure plus souple pour définir un container
const Container = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

// Vérification des types injectés dans le composant le type est un peu complexe ici ...
Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node), // définition d'un type composant
        PropTypes.node
    ]).isRequired
};

export default Container;