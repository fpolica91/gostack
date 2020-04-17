/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Image} from 'react-native';
import Background from '~/Components/Background';
import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function Signin({navigation}) {
  const passwordRef = useRef();

  function handleSubmit() {}
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Enter your email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Enter your password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton>Log In</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('Signup')}>
          <SignLinkText>Create Account </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
