import React from 'react';
import {IonInput, IonIcon} from '@ionic/react';
import {searchSharp} from 'ionicons/icons';
import './SearchBar.css';

const SearchBar: React.FC = () => {
    return (
        <div className="container">
            <IonIcon className="searchElement" icon={searchSharp} />
            <IonInput className="inputElement" placeholder="Suche "></IonInput>
        </div>
    );
};

export default SearchBar;