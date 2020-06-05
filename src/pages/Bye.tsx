import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useByeQuery } from "../generated/graphql";

interface Props {}

export const Bye: React.FC<RouteComponentProps> = ({history}) => {
    const {data, loading, error} = useByeQuery({
        fetchPolicy: "network-only",
    });
    if (error) {
        console.log(error);
        return <div>err</div>
    }
    
    if (loading || !data) {
        return <div>Loading...</div>
    }

    return <div>There is some data</div>;
  };
  