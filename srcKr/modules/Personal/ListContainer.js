import React, { useEffect, useState } from "react";
import { getPrivateRecipe } from "../../../apis";
import ListPresenter from "./ListPresenter";
import styled from 'styled-components/native';
import { ActivityIndicator } from "react-native";

const Wrapper = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default () => {
    const [ready, setReady] = useState(false);

    // tmp user id
    const USER_ID=4;

    const [recipes, setRecipes] = useState({
        loading: true,
        recipes:[],
        recipesError:null
    })
    const getData = async() => {
        const res = await getPrivateRecipe(USER_ID);
        // console.log("res in list container: ", res);
        setRecipes({
            loading:false,
            recipes: res.Items,
            recipesError: null
        })
        setReady(true)
    }
    useEffect(()=>{
        getData();
    }, []);
    return (
        ready
        ? <ListPresenter refreshFn={getData}{...recipes}/>
        : 
        <Wrapper>
        <ActivityIndicator color="#BB6767" size="large" />
        </Wrapper>
    )
    // return <ListPresenter refreshFn={getData}{...recipes}/>
    // return <Text>hello</Text>
}