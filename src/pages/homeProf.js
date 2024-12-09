import React from 'react';
import ListaPosts from '../components/listarPosts/listarPosts';

const HomeProf = () => {
    return (
        <div>
            <h1>Bem-vindo, Professor</h1>
            <button onClick={() => alert('Criar Novo Post')}>Criar Post</button>
            <ListaPosts />
        </div>
    );
};

export default HomeProf;
