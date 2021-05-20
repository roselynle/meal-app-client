
import React from 'react';
import "./style.css"
import { useHistory } from 'react-router-dom';
const BackButton = () => {
const history = useHistory();

return <i id="back-button" class="fas fa-arrow-circle-left" onClick={history.goBack}></i>

{/* <button id="back-button" onClick={history.goBack}>Back</button> */}
}
export default BackButton;