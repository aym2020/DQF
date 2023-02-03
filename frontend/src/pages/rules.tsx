import React, { useEffect } from "react";

import rulesAPI from "../plugins/rulesAPI";

const Rules = () => {

    useEffect(() => {
        const getRules = async () => {
            try {
                await rulesAPI.get('rules')
            } catch (error) {
                console.log('oh no request failed');
            }
        }
        getRules();
    }, []);

    return (
        <div className="Rules">
        <h1>Rules</h1>
        </div>
    );
}

export default Rules;