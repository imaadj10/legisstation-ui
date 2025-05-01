import React from "react";
import { StateNames } from '@mirawision/usa-map-react';

export const State = () => {
    const sid = window.location.pathname.split('/')[2];
    return (
        <div>
            {StateNames[sid]}
        </div>
    );
}
