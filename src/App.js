import React from 'react';
import { Post }  from './Post'
import { Header } from './Header'
export function App() {
  return (
    <>
    <Header>
    <h2>Posts da semana</h2>
    </Header>

    <hr />

    <Post
    likes={20465498748940}
    post={{
     title: 'Titulo de uma noticia 01',
     subtitle: 'Subtitulo de uma noticia 01'}}
     />

    <Post
    likes={20015}
    post={{
      title: 'Titulo de uma noticia 02',
      subtitle: 'Subtitulo de uma noticia 02'}}
     />

    <Post
    likes={2010}
    post={{
      title: 'Titulo de uma noticia 03',
      subtitle: 'Subtitulo de uma noticia 03'}}
     />

    </>
  );
}
