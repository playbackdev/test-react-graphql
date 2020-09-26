import React from 'react';
import classes from './PostCard.module.scss';
import {useHistory} from 'react-router-dom';
import img from '../images/user-icon.png'

export const PostCard = ({user}) => {
    const {id, title, body, author} = user;
    let history = useHistory();

    const onCardClick = () => {
        history.push(`/user/${author.id}`);
    };

    return <div className = {classes.PostCard} onClick={onCardClick}>
        <img className={classes.UserImage} alt='' src={img}/>
            <div className={classes.PostContent}>
                <h2 className={classes.Author}>Author: {author.name}</h2>
                <h3 className={classes.PostTitle}>Title: {title}</h3>
                <p className={classes.PostBody}>{body} </p>
            </div>
    </div>;
};