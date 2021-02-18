import React from "react";
import './ResultsContainer.css'
import NameCard from '../NameCard/NameCard'

const ResultsContainer = ({ suggestedNames }) =>{

    const suggestedNameCards = suggestedNames.map((suggestedName) => {
        return <NameCard suggestedName={suggestedName} />;
    });

    return <div className="results-container">{suggestedNameCards}</div>;
};

export default ResultsContainer;