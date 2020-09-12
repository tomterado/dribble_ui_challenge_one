import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Button,
    ButtonShadow,
    Header,
    HeaderContentOne,
    HeaderContentTwo,
    HeaderContentThree,
    HeaderContentTwoText,
    LeftContentContainer,
    LeftContent,
    MainTitle,
    SecondaryTitleRow,
    SecondaryTitleText,
    BlueNumberedText,
} from './styled.js'

function App() {

  const headerContent = (
      <Header>
        <HeaderContentOne>
            <img src="./logo.png" width={80} height={35}/>
        </HeaderContentOne>

        <HeaderContentTwo>
          <HeaderContentTwoText>Courses</HeaderContentTwoText>
          <HeaderContentTwoText>Features</HeaderContentTwoText>
          <HeaderContentTwoText>Support</HeaderContentTwoText>
        </HeaderContentTwo>

        <HeaderContentThree>
            <img src="./email.png" width={40} height={40} style={{borderRadius:20, marginRight: 16}}/>
            <img src="./me.png" width={40} height={40} style={{borderRadius:20}}/>
        </HeaderContentThree>
      </Header>
  )

  const mainTextContent = (
      <div>
        <MainTitle>Study different areas <br/>of web design easily <br/>in 3 steps:</MainTitle>
        <SecondaryTitleRow>
          <BlueNumberedText>.01</BlueNumberedText>
          <SecondaryTitleText>Visit our website </SecondaryTitleText>
        </SecondaryTitleRow>
        <SecondaryTitleRow>
          <BlueNumberedText>.02</BlueNumberedText>
          <SecondaryTitleText>Sign up</SecondaryTitleText>
        </SecondaryTitleRow>
        <SecondaryTitleRow>
          <BlueNumberedText>.03</BlueNumberedText>
          <SecondaryTitleText>Find the course you want</SecondaryTitleText>
        </SecondaryTitleRow>

          <div>
            <Button>
              <p> Sign up</p>
            </Button>
            <ButtonShadow/>
          </div>

      </div>
  )

  const leftColumn = (
      <LeftContentContainer>
        {headerContent}
        <LeftContent>
          {mainTextContent}
        </LeftContent>
      </LeftContentContainer>
  )

  return (
    <div className="App">
      <div style={{display: 'flex', height: '90vh'}}>
        {leftColumn}
        <div style={{width: '50%', backgroundColor: '#8FC1FA', borderRadius: 64, justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
            <img src="./main_image.png" width={300} height={300}/>
        </div>
      </div>
    </div>
  );
}

export default App;
