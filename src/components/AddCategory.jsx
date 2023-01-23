import { useState } from 'react'
import PropTypes from 'prop-types';
import { func } from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    

    const [input, setInput] = useState('');

    const onSubmit = (e) => {

        e.preventDefault();
        if(input.trim().length <= 1) return;
        setInput('');
        onNewCategory(input);

    } 


  return (
    <div>
        
        <form onSubmit={onSubmit} aria-label="form">

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


AddCategory.propTypes={

  onNewCategory: PropTypes.func.isRequired,

}