import { useState } from 'react';
import './stylee.css'
export default function LogIn() {
    var usuarios = ['ADMIN', 'ADMIN123'];
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [parametro, setParametro] = useState(false);

    function verificarUsuário(dados) {
        dados.preventDefault();
        setParametro(false);

        usuarios.forEach((texto) => {
            if (texto === usuario.toUpperCase() && senha === '1234') {
                setParametro(true);
                setUsuario('');
                setSenha('');
            }
        }
        );
    }

    return (
        <div class='principalHome'>
                <h1 class='title'>Login</h1>

            <div>
                <form class='inputsDiv' onSubmit={verificarUsuário}>
                    <label class='subtitle'>Username:</label>
                    <input class='inputs' type='text' placeholder='Informe o nome de usuário' required value={usuario} onChange={(evento) => setUsuario(evento.target.value)} />
                    <label class='subtitle'>Senha:</label>
                    <input class='inputs' type='password' placeholder='Informe a sua senha' required value={senha} onChange={(evento) => setSenha(evento.target.value)} />

                    <div align="center">
                        <button class='button' type='submit'>Login</button>
                    </div>
                </form>
            </div>

            <hr />

            <div>
                {parametro === true ? (
                    <div class = 'mensagemDiv'>
                        <p alert='mensagem'>Bem vindo ao sistema!</p>
                    </div>
                ) : (
                    <div class = 'mensagemDiv'>
                        <p alert='mensagem'>Verifique suas credenciais!</p>
                    </div>
                )
                }
            </div>
        </div>
    );
}