/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
// Redux Imports
import {useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from './navigation/Routes';
// Modify to add persistor
import {persistor} from './services/redux/store/index';
import {getPokemons} from "./services/redux/actions";
import {Text, View} from "react-native";

const App = () => {

    const dispatch = useDispatch();
    const fetchPokemons = async () => await dispatch(getPokemons());

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!isLoading)
            fetchPokemons();

        setIsLoading(false)
    }, [isLoading]);

    return (
        <PersistGate loading={null} persistor={persistor}>
            {isLoading ? <View><Text>Loading ....</Text></View> :
                <Routes/>
            }
        </PersistGate>
    );
};

export default App;
