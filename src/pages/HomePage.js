import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import signup from "../API/signup"
import login from "../API/login";
import { navigateToUser } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  gap: 5px;
`;
function HomePage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const navigate = useNavigate();
  const submitForm = (event) => {
    event.preventDefault();
    login(form)
    navigateToUser(navigate, "myllena-vieira")
  };
  return (
    <main>
      <Header />
      <h1>Página Inicial</h1>
      <Form onSubmit={submitForm}>
        <label htmlFor="email">Login</label>
        <input
          id="email"
          name="email"
          type="text"
          input="form.email"
          onChange={onChange}
          placeholder="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          name="password"
          type="password"
          input="form.password"
          onChange={onChange}
          placeholder="senha"
          required
        />
        <button>Login</button>
      </Form>
      <button onClick={signup}>Criar</button>
    </main>
  );
}

export default HomePage;
