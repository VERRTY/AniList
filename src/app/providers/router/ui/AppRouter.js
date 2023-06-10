import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../../../../shared/config/routeConfig/routePathConfig";

const AppRouter = () => {
    return (
        <Routes>
            {
                routeConfig.map(({path, element}) =>
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<div>Loading...</div>}>
                                {element}
                            </Suspense>
                        )}
                    />
                )

            }
        </Routes>
    );
};

export default AppRouter;