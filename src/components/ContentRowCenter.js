import React from "react";
import LastGameInDb from "./LastGameInDb";
import GenresInDb from "./GenresInDb";

function ContentRowCenter(){
    return (
        <div className="row">
            <LastGameInDb />

            <GenresInDb />
        </div>
    )
}

export default ContentRowCenter;
