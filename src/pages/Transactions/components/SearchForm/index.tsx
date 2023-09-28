import {SearchFormContainer} from "./styles.ts";
import {MagnifyingGlass} from "phosphor-react";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder={"Busque por transações"}/>
      <button type={"submit"}><MagnifyingGlass/>Buscar</button>
    </SearchFormContainer>
  )
}