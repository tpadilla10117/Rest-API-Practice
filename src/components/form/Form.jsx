import React, { useState } from 'react';


function Form(  ) {

    const [ formNameState, setFormNameState ] = useState('');
    const [ formEmailState, setFormEmailState ] = useState('');
    const [ documentTypeDropdownActiveToggler, setdocumentTypeDropdownActiveToggler ] = useState(false);

    const nameInputHandler = (event) => {
        setFormNameState(event.target.value)
    };

    const emailInputHandler = (event) => {
        setFormEmailState(event.target.value)
    };

    const documentTypeShowDropdownOptionsHandler = () => {
        setdocumentTypeDropdownActiveToggler(!documentTypeDropdownActiveToggler);
    };
    console.log(documentTypeDropdownActiveToggler)

    /* Selects value from the dropdown: */
    const revealItems = (text) => {
    
        if(text !== null || text !== '') {
          document.querySelector('.form-documentType-input').value = text;
        };
        
    };

    let documentTypeItems = [
        {
            id: 1,
            name: 'Business Doc'
        },
        {
            id: 2,
            name: 'Sales Doc'
        },
        {
            id: 3,
            name: 'Medical Doc'
        },
        {
            id: 4,
            name: 'Legal Doc'
        },
    ];
   
    return (
        <form className='form-parent-container'>
            <input
                id='form-name'
                className='form-name'
                type='text'
                minLength='2'
                maxLength='32'
                placeholder='Enter Your Name...'
                value={formNameState}
                onChange={nameInputHandler}
            />
            <label 
                htmlFor='form-name'
            />

            <div 
                className='form-documentType-parent-container'
                onClick={documentTypeShowDropdownOptionsHandler}
            >
                <h3>Select Type of Document...</h3>
                <div className='form-documentType'>

                    <input 
                        placeholder='Select Size...'
                        className='form-documentType-input'
                        id='form-documentType-input'
                        readOnly
                    />
                    <label 
                        htmlFor='form-documentType-input'
                    />
                    <ul className={documentTypeDropdownActiveToggler ? 'form-documentType-dropdownOptions active' : 'form-documentType-dropdownOptions'}>
                        {documentTypeItems.map( (items, index) => {
                            return (
                                <li 
                                    key={index}
                                    id={items.id}
                                    className={items.id}
                                    onClick={ () => revealItems(items.name)}
                                >
                                    {items.name}
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
           

            <input />
            <label />

            <input 
                id='form-email'
                className='form-email'
                type='email'
                maxLength='128'
                placeholder='Enter Your Email...'
                value={formEmailState}
                onChange={emailInputHandler}
            />
            <label 
                htmlFor='form-email'
            />

           


        </form>
    )
}

export default Form;