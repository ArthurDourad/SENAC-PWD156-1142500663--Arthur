import {useState} from 'react';
function CalculodoFrete(){
    const [entradaPeso, setEntradaPeso] = useState('');
    const [entradaDestino, setEntradaDestino] = useState('');
    var destinoFrete = ['RIO DE JANEIRO','SAO PAULO' , 'ESPIRITO SANTO', 'MINAS GERAIS', 'TOCANTINS'];
    const [dadosUsuario, setDadosUsuario] = useState(
        {pesoDados:'PRIVADO', destinoDados:'PRIVADO', valorDados:'0,00'}
    );
    var km = 0;
    var cont = 0;

    function calcularFrete(dados){
        dados.preventDefault();

        destinoFrete.forEach((item)=>{
            if(item !== entradaDestino.toUpperCase()){
                cont += 1;
            } else {
                if(item === destinoFrete[0] && item === entradaDestino.toUpperCase()){
                    km = 435;

                } else if (item === destinoFrete[1] && item === entradaDestino.toUpperCase()){
                    km = 20;

                } else if (item === destinoFrete[2] && item === entradaDestino.toUpperCase()){
                    km = 80;

                } else if (item === destinoFrete[3] && item === entradaDestino.toUpperCase()){
                    km = 30;

                } else if (item === destinoFrete[4] && item === entradaDestino.toUpperCase()){
                    km = 27;
                }    
            }
        });
            if(!entradaDestino || cont === 5 || !entradaPeso){
                window.alert('Erro. \n\nInsira um destino válido \n\nAs cidades disponíveis são: \n- Sao Paulo; \n- Rio de Janeiro; \n- Espirito Santo; \n- Minas Gerais; \n- Tocantins.');
                setDadosUsuario(
                    {pesoDados:'PRIVADO', destinoDados:'PRIVADO', valorDados:'0,00'}
                );

                setEntradaPeso('');
                setEntradaDestino('');
            } else {
                setDadosUsuario(
                {pesoDados:entradaPeso, destinoDados:entradaDestino, valorDados:(km * 2.5)}
                );

                setEntradaPeso('');
                setEntradaDestino('');
            }
    }    

        return(
            <div class='principalHome'>
                    <h1 class='title'>Frete</h1> 
                <br/>
                <hr/>
            
                <div>
                    <form class='formulario'onSubmit={calcularFrete}>
                        
                        <label class='mensagem'>Peso</label>
                        <input type='number' min='1' placeholder='Digite o Peso' class='input'value={entradaPeso} onChange={(evento) => setEntradaPeso(evento.target.value)}></input>
                        <br/>
                        <label class='mensagem'>Destino</label>
                        <input type='text' placeholder='Digite o Destino' class='input' value={entradaDestino} onChange={(evento) => setEntradaDestino(evento.target.value)}></input>
                        <br/>
                        

                        <div align="center">
                        <button class='button'>Calcular</button>
                        </div>
                    </form>
                </div>

                <br/><hr/><br/>

                <div>
                    <h2 align='center' class='subtitle'>Valores:</h2>
                    <p class='mensagem'>Peso:&nbsp;{dadosUsuario.pesoDados}</p>
                    <p class='mensagem'>Destino:&nbsp;{dadosUsuario.destinoDados.toUpperCase()}</p>
                    <p class='mensagem'>Valor do Frete:&nbsp; R$&nbsp;{dadosUsuario.valorDados}</p>
                </div>
            </div>

    );    
}

export default CalculodoFrete;