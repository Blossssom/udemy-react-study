import Header from "./components/Layout/Header";
import styled from "styled-components";



function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
`;
