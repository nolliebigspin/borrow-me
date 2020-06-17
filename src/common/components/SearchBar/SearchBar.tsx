import React from 'react';
import {IonInput, IonIcon} from '@ionic/react';
import {searchSharp} from 'ionicons/icons';
import './SearchBar.css';
import { useHistory } from 'react-router';

interface ContainsProps {

    placeholder?: string
    changePlaceholder? : boolean
}

const SearchBar: React.FC<ContainsProps> = ({placeholder, changePlaceholder}) => {
    const history = useHistory();
    

    return (
        <div className="container">
            <IonIcon className="searchElement" icon={searchSharp} />
            {!changePlaceholder &&
                <IonInput className="inputElement" placeholder="Suche " onClick={() => history.push('/search')}></IonInput>
            }

            {changePlaceholder &&
                <IonInput className="inputElement"  placeholder={placeholder}></IonInput>
            }      
        </div>
    );
};

export default SearchBar;