import './style.css';
function App() {
   function validate(){
    const peso = document.getElementById('peso');
        peso.style.border = 'none';
        if(!peso.value){
          peso.style.border = '1px solid red';
        }
    let imc = peso.value;
    const result = document.getElementById('resultado');
        if(imc < 18.5){
          result.innerHTML = "Abaixo do peso"
        }else if(imc < 25){
          result.innerHTML = "Normal"
        }else if(imc < 30){
          result.innerHTML = "Sobrepeso"
        }else if(imc < 34.9){
          result.innerHTML = "Obesidade Grau 1"
        }else if(imc < 40){
          result.innerHTML = "Obesidade Grau 2"
        }else{
          result.innerHTML = "Obesidade Grau 3"
        }
    }
  return (
    <div className="container">
      <div className='second-step'>
        <h1 className="title">Análise IMC</h1>
        <div className="containerInput">
        <input type="number" placeholder="Informe o IMC: " id ="peso"/>
        <button className="buttonSearch" onClick={validate}>
          Análisar
        </button>
        </div>
      </div>
      <main className='final-step'>
        <h2 className='title2'>Classificação IMC!</h2>
        <p className='resultado' id='resultado'></p>
      </main>
    </div>
  );
}
export default App;