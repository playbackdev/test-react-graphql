import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../model/graphql/queries';
import classes from './Posts.module.css';
import {PostCard} from '../components/PostCard';
import {NavBar} from "../components/NavBar";
import {Loader} from "../components/Loader";

export const Posts = () => {

    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <Loader />;
    if (error) return <p>Error :(</p>;

    return <div className = {classes.Users} >
        <NavBar header={'Posts List'}/>
        <div className={classes.UsersList}>
            {data.posts.data.map((post) => <PostCard key={post.id} user={post}/>)}
        </div>
    </div>;
};