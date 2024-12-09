import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ViewPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await api.get(`/posts/${id}`); // Substitua pelo endpoint correto
            setPost(response.data);
        };

        fetchPost();
    }, [id]);

    return (
        <div>
            <h1>Detalhes da Publicação</h1>
            {post ? (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default ViewPost;
