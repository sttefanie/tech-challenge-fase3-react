import React from 'react';
import PostForm from '../components/postForm/postForm';
import api from '../services/api';

const NewPost = () => {
    const handleCreatePost = async (postData) => {
        await api.post('/posts', postData); // Substitua pelo endpoint correto
        alert('Post criado com sucesso!');
    };

    return (
        <div>
            <h1>Nova Publicação</h1>
            <PostForm onSubmit={handleCreatePost} />
        </div>
    );
};

export default NewPost;
