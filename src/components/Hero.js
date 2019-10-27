import React from 'react';
import Button from '@material-ui/core/Button';
import '../stylesheets/Hero.scss';

const Hero = (props) => (
    <div className="fillWindow">
        <Button className="centered" onClick={() => props.login(true)}>
                Login
        </Button>
    </div>
);

export default Hero;
