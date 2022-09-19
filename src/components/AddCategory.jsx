import { useState } from "react"


export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({ target }) => {


        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if( newInputValue.length <= 1 ) return;

        onNewCategory(newInputValue);
        //setCategories((cat) => [inputValue, ...cat ]);
        setInputValue('');
    }
    return (
        <form onSubmit={ onSubmit }>


            <input
                type="text"
                placeholder="Buscar GIFs..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
