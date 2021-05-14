import React from "react";


function AddRecipeForm() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Pages.Home} />
                <Route path="/recipes" component={Pages.Recipes} />
            </Switch>
        </>
    );
}

export default AddRecipeForm;
