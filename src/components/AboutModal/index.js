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

                <a className="far fa-question-circle" role="link" style={{ fontSize: "2rem", padding: "10px", textDecoration: "none", color: "black"}} onClick={openModal}></a>

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
                        information such as the ingredients required and instructions on how to
                        make it. If a recipe catches your eye then feel free to save it to
                        your favourites, you will also be alble to unsave at anytime.{" "}
                    </p>
                    <p>
                        On the 'Plan It' page, you will find your 7 day meal
                        plan which you can customise to your liking. The recipes you have
                        favourited will also appear at the bottom to help inspire your weekly meal plan.
                        Simply drag and drop meals from your favourites into the meal plan cards. If you change your mind
                        about a meal for a certain day then you can simply drag another one from your favourites and 
                        replace it. On top of that you can
                        also get a shopping list of ingredients required for week straight to your email!
                    </p>
                    <p>
                        On the 'Make It' page, you will be able to submit your own recipe to
                        the community. Give your recipe a name and description, upload a photo, add your ingredients/instructions 
                        and specify which dietary requirements it meets. Please make sure that all fields are filled in completely 
                        and that there are no fields left blank.
                    </p>
                    <p>Thanks for using and happy planning! Feel free to check out the GitHub repo of this app 
                     <a href="https://github.com/roselynle/community-cook"> here</a>
                    </p>
                </div>
            </Modal>
        </>
    );
};

export default AboutModal;
