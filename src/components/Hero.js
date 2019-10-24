import React from 'react';
import Button from "@material-ui/core/Button";

const Hero = props => {
    return (
        <div>
            <Button onClick={() => props.login(true)}>
                Login
            </Button>
        </div>
    )
};

export default Hero;