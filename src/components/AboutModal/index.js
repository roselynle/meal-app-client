import React, { useState } from "react";
import Modal from "react-modal";
import "../../App.css";

const AboutModal = () => {
    const [openAbout, setOpenAbout] = useState(false);

    function openModal() {
        setOpenAbout(true);
    }

    function closeModal() {
        setOpenAbout(false);
    }

    return (
        <>
            <div role="div" className="about-modal">

                <a className="far fa-question-circle" style={{ fontSize: "2rem", padding: "10px", textDecoration: "none", color: "black"}} onClick={openModal}></a>

            </div>

            <Modal isOpen={openAbout} onRequestClose={closeModal}>
                <div className="modal-body">
                    <button onClick={closeModal}>X</button>
                    <h3>Thanks for signing up for PlanEat!</h3>
                    <p>
                        {" "}
                        On the 'Prep It' page, you will find a list of recipes 
                        that have been submitted by the PlanEat community. On each 
                        recipe you will can find out more
                        information such as the ingredients required and how to
                        make it. If a recipe catches your eye then feel free to save it to
                        your favourites.{" "}
                    </p>
                    <p>
                        On the 'Plan It' page, you will find your 7 day meal
                        plan which you can customise to your liking. The recipes you have
                        favourited will also appear on this page to help inspire your weekly meal plan.
                        You are able to change and resubmit your meal plan whenever you like. On top of that you can
                        also get a shopping list of ingredients required for week straight to your email!
                    </p>
                    <p>
                        On the 'Make It' page, you will be able to submit your own recipe to
                        the community. Make sure you fill in all fields and upload at photo!
                    </p>
                </div>
            </Modal>
        </>
    );
};

export default AboutModal;
