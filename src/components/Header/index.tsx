import {HeaderContainer, HeaderContent, NewTransactionButton} from "./styles.ts";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt=""></img>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>

  )
}