import firebase from "firebase";
import {auth} from "../../adapters/helpers";
import React from "react";
import {Button, Space} from "antd";

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <Space>
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        </Space>
    )
}

export default SignIn
