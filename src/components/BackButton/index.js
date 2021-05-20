
import React from 'react';
import "./style.css"
import { useHistory } from 'react-router-dom';
const BackButton = () => {
const history = useHistory();

return <i role="button" id="back-button" className="fas fa-arrow-circle-left" onClick={history.goBack}></i>

}
export default BackButton;