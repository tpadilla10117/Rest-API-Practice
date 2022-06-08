import React from 'react';

function Form( {setInputText, inputText, todos, setTodos, setStatus} ) {

/* State to generate unique Ids on each todo: */

    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };

    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText('');
    };

/* Function to handle dropdown state: */
    const statusHandler = (event) => {
        setStatus(event.target.value);
    };

    return (
        <form className='todoform-parent-container'>
            <input
                type='text'
                className='todoform-input'
                id='todoform-input'
                placeholder='Enter some text'
                value={inputText}
                onChange={inputTextHandler}
            />
            <label htmlFor='todoform-input'/>

            <button
                type='submit'
                className='todoform-button'
                onClick={submitTodoHandler}
            >
                Submit
            </button>

            <div className='todoform-select-parent-container'>
                <select id='todoform-select' className='todoform-select' onChange={statusHandler}>
                    <option value='all'>
                        All
                    </option>
                    <option value='completed'>
                        Completed
                    </option>
                    <option value='uncompleted'>
                        Uncompleted
                    </option>

                </select>
                <label htmlFor='todoform-select'/>
            </div>


        </form>
    )
}

export default Form;