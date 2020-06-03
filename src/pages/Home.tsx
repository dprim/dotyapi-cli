import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const Home: React.FC<Props> = () => {
    return <div>
        <div><Link to="/register">Register</Link></div>
        <div><Link to="/login"></Link>Login</div>
    </div>;
};