import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    

    const [input, setInput] = useState('');

    const onSubmit = (e) => {

        e.preventDefault();
        onNewCategory(input);
        setInput('');

    } 


  return (
    <div>
        
        <form onSubmit={onSubmit}>

        <input
        
        required
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}

        ></input>
      
        </form>

    </div>
  )
}
