import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  

  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Yapılacak planı düzenle'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Düzenle
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Bir plan ekle'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
          />
          <button onClick={handleSubmit} className='todo-button'>
           Ekle
           
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;