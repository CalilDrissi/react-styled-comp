import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";



const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 2px solid red;
  }
  body {
   font-family: 'Roboto', sans-serif ;
  }
`

const Container = styled.div`
    width: 70%;
    min-height: 100vh;
    margin: 0 auto;
`

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" path="/" element={<Home />} />
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
