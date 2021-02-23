import firebase from "firebase";
import {auth} from "../../adapters/helpers";
import React from "react";
import {Button, Space} from "antd";
import styled from "styled-components";
import { red } from '@ant-design/colors';

const StyledDiv = styled.div`
  background-color: ${red.primary};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <StyledDiv>
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        </StyledDiv>
    )
}

export default SignIn
