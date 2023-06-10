import React, {Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";

const WithRouter = ({routes}) => {
    return (
        <BrowserRouter>
            <Suspense fallback={"Loading..."}>

            </Suspense>
        </BrowserRouter>
    );
};

export default WithRouter;