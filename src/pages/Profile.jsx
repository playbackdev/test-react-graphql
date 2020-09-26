import React from "react";
import {useQuery} from "@apollo/client";
import {GET_PROFILE} from "../model/graphql/queries";
import {NavBar} from "../components/NavBar";
import {useParams} from "react-router-dom";
import classes from './Profile.module.scss';
import img from "../images/user-icon.png";
import {Loader} from "../components/Loader";

export const Profile = () => {

    const {userId} = useParams();
    const { loading, error, data } = useQuery(GET_PROFILE(userId));

    if (loading) return <Loader/>;
    if (error) return <p>Error :(</p>;

    return <div>
        <NavBar header='Profile' button={{title: '<', link: '/'}}/>
        <div className={classes.ProfileCard}>
            <img className={classes.UserImage} alt='' src={img}/>
            <div className={classes.UserInfo}>
                <h2>{data.user.name}</h2>
                <ul>
                    <li>Email: {data.user.email}</li>
                    <li>Adress: {data.user.address.city}, {data.user.address.street}, {data.user.address.suite}, {data.user.address.zipcode}</li>
                    <li>Phone: {data.user.phone}</li>
                    <li>Website: {data.user.website}</li>
                    <li>Company: {data.user.company.name} ({data.user.company.catchPhrase}, {data.user.company.bs})</li>
                </ul>

            </div>
        </div>
    </div>;

};