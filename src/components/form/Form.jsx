import React, { useState } from 'react';
import {
    ProgressBar
} from '../utils';


function Form() {

    const [ formNameState, setFormNameState ] = useState('');
    const [ formEmailState, setFormEmailState ] = useState('');
    const [ formDocumentTypeState, setFormDocumentTypeState ] = useState('');
    const [ formDocumentCategoryState, setFormDocumentCategoryState ] = useState('');
    const [progressBarStatus, setProgressBarStatus ] = useState(0)
    const [ documentTypeDropdownActiveToggler, setdocumentTypeDropdownActiveToggler ] = useState(false);
    const [ currentStep, setCurrentStep ] = useState(1);
    const [ documentCategoryDropdownActiveToggler, setdocumentCategoryDropdownActiveToggler ] = useState(false);


/* Functions to increment / decrement progressBar based on step number:  */
    const incrementBar = () => {

        if(progressBarStatus !== 100) {
            setProgressBarStatus(progressBarStatus + 25)
        };
        
    };

    const decrementBar = () => {
        
        setProgressBarStatus(progressBarStatus - 25)

    }


/* Functionality for toggling the steps in the progressBar: */
    const nextSteps = (event) => {
        event.preventDefault();
        let theCurrentStep = currentStep;
        theCurrentStep = theCurrentStep >= 3 ? 4 : theCurrentStep + 1;
        setCurrentStep(theCurrentStep);
        incrementBar();
    };

    const previousSteps = (event) => {
        event.preventDefault();
        let theCurrentStep = currentStep;
        theCurrentStep = theCurrentStep <= 2 ? 1 : theCurrentStep - 1;
        setCurrentStep(theCurrentStep);
        decrementBar();
    };

/* onChange handlers for form inputs & dropdowns: */
    const nameInputHandler = (event) => {
        setFormNameState(event.target.value)
    };

    const emailInputHandler = (event) => {
        setFormEmailState(event.target.value)
    };

    const documentTypeInputHandler = (event) => {
        setFormDocumentTypeState(event.target.value);
    }

    const documentCategoryInputHandler = (event) => {
        setFormDocumentCategoryState(event.target.value);
    }

    const documentTypeShowDropdownOptionsHandler = () => {
        setdocumentTypeDropdownActiveToggler(!documentTypeDropdownActiveToggler);
    };

    const documentCategoryShowDropdownOptionsHandler = () => {
        setdocumentCategoryDropdownActiveToggler(!documentCategoryDropdownActiveToggler);
    };

    const submitFormHandler = () => {
        alert('form submitted')
    };

/* Selects value from the dropdown: */
    const revealItems = (text) => {
    
        if(text !== null || text !== '') {
          setFormDocumentTypeState(text)
        };
        
    };

    const revealCategoryItems = (text) => {
    
        if(text !== null || text !== '') {
          setFormDocumentCategoryState(text);
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
    let documentCategoryItems = [
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
        <section>
            <ProgressBar 
                complete={progressBarStatus}
                setComplete={setProgressBarStatus}
                incrementBar={incrementBar}
            />

            <form className='form-parent-container'>
                <div className={currentStep === 1 ? `form-steps active` : `form-steps `}>

                    <input
                        id='form-name'
                        className='form-name'
                        name='form-name'
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

                    <button
                        onClick={nextSteps}
                        className='form-next-btn'
                    >
                        Next
                    </button>

                </div>
                
                <div className={currentStep === 2 ? `form-steps active` : `form-steps `}>

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
                                name='form-documentType-input'
                                readOnly
                                value={formDocumentTypeState}
                                onChange={documentCategoryInputHandler}
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

                    <button
                        onClick={previousSteps}
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextSteps}
                        className='form-next-btn'
                    >
                        Next
                    </button>
                </div>
            
                <div className={currentStep === 3 ? `form-steps active` : `form-steps `}>

                    <div 
                        className='form-documentCategory-parent-container'
                        onClick={documentCategoryShowDropdownOptionsHandler}
                    >
                        <h3>Select Category...</h3>
                        <div className='form-documentCategory'>

                            <input 
                                placeholder='Select Category...'
                                className='form-documentCategory-input'
                                id='form-documentCategory-input'
                                name='form-documentCategory-input'
                                readOnly
                                value={formDocumentCategoryState}
                                onChange={documentTypeInputHandler}
                            />
                            <label 
                                htmlFor='form-documentCategory-input'
                            />
                            <ul className={documentCategoryDropdownActiveToggler ? 'form-documentCategory-dropdownOptions active' : 'form-documentCategory-dropdownOptions'}>
                                {documentCategoryItems.map( (items, index) => {
                                    return (
                                        <li 
                                            key={index}
                                            id={items.id}
                                            className={items.id}
                                            onClick={ () => revealCategoryItems(items.name)}
                                        >
                                            {items.name}
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>

                    </div>
                    <button
                        onClick={previousSteps}
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextSteps}
                        className='form-next-btn'
                    >
                        Next
                    </button>
                </div>

                <div className={currentStep === 4 ? `form-steps active` : `form-steps `}>

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

                    <button
                        onClick={previousSteps}
                    >
                        Previous
                    </button>
                    <button
                        type='submit'
                        onClick={submitFormHandler}
                    >
                        Submit
                    </button>
                </div>

            </form>


        </section>
    )
}

export default Form;