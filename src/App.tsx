import Todo from './components/Todo';
import backgroud from './img/back.png';
import styled from 'styled-components';


const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: url(${backgroud}) no-repeat center;
`;


export default function App() {
  return (
    <StyledApp>
      <Todo />
    </StyledApp>
  )
}
