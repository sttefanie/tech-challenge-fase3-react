import React, { useState, useEffect } from 'react';
import PostTable from '../components/postTable/postTable';
import api from '../services/api';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await api.get('/posts'); // Substitua pelo endpoint correto
            setPosts(response.data);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Publicações</h1>
            <PostTable posts={posts} />
        </div>
    );
};

export default Home;
