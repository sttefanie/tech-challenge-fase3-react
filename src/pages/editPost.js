import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostForm from '../components/postForm/postForm';
import api from '../services/api';

const EditPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await api.get(`/posts/${id}`); // Substitua pelo endpoint correto
            setPost(response.data);
        };

        fetchPost();
    }, [id]);

    const handleEditPost = async (postData) => {
        await api.put(`/posts/${id}`, postData); // Substitua pelo endpoint correto
        alert('Post atualizado com sucesso!');
    };

    return (
        <div>
            <h1>Editar Publicação</h1>
            {post && <PostForm initialData={post} onSubmit={handleEditPost} />}
        </div>
    );
};

export default EditPost;
