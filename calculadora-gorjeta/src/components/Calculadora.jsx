import './Calculadora.css'
import cifrao from "../images/cifrao.png"
import pessoa from "../images/pessoa.png"
import { useState } from 'react'

export default function Calculadora(){

    const [conta, setConta] = useState(0)
    const [pessoas, setPessoas]  = useState(0)
    const [porcentagem, setPorcentagem] = useState(0)

    function handleAlterarConta(event) {
        setConta(Number(event.target.value))
    }

    function handleAlterarPessoas(event) {
        setPessoas(Number(event.target.value))
    }

    function handleAlterarPorcentagem(event, numero) {
        if (event === 0) {
            return setPorcentagem(numero)
        }

        return setPorcentagem(Number(event.target.value))
    }

    function handleLimpar() {
        setConta(0)
        setPessoas(0)
        setPorcentagem(0)
    }

    let gorjeta = 0
    let total = 0

    if (conta !== 0 && pessoas !== 0 && porcentagem !== 0) {
        gorjeta = conta * porcentagem / 100 / pessoas
        total = conta / pessoas + gorjeta

    }

    return(
        <main>
            <form action="">
                <div className="bill mb-div">
                    <label htmlFor="bill">Conta</label>
                    <div className="input-box">
                        <img src={cifrao} alt="Cifrão" />
                        <input id="bill" placeholder="0" type="number" onChange={handleAlterarConta} value={conta === 0 ? " " : conta}/>
                    </div>
                </div>
                <div className="tip-percentage mb-div">
                    <label htmlFor="custom">Selecione a Porcentagem</label>
                    <div>
                        <input type="button" value="5%" onClick={ () => handleAlterarPorcentagem(0, 5)} className={porcentagem === 5 ? "selected" : ""} />
                        <input type="button" value="10%" onClick={ () => handleAlterarPorcentagem(0, 10)} className={porcentagem === 10 ? "selected" : ""} />
                        <input type="button" value="15%" onClick={ () => handleAlterarPorcentagem(0, 15)} className={porcentagem === 15 ? "selected" : ""} />
                        <input type="button" value="25%" onClick={ () => handleAlterarPorcentagem(0, 25)} className={porcentagem === 25 ? "selected" : ""} />
                        <input type="button" value="50%" onClick={ () => handleAlterarPorcentagem(0, 50)} className={porcentagem === 50 ? "selected" : ""} />
                        <input type="number" id="custom" placeholder="Outra" onChange={handleAlterarPorcentagem} value={porcentagem === 0 ? " " : porcentagem} />
                    </div>
                </div>
                <div className="people mb-div">
                    <label htmlFor="people-number">Número de Pessoas</label>
                    <div className="input-box">
                        <img src={pessoa} alt="Pessoa" />
                        <input type="number" id="people-number" placeholder="0" onChange={handleAlterarPessoas} value={pessoas === 0 ? " " : pessoas}/>
                    </div>
                </div>
            </form>
            <section className="results">
                <div>
                    <div className="tip-amount">
                        <p>Gorjeta</p><br />
                        <span>/ pessoa</span>
                        <p>R$ {gorjeta.toFixed(2)}</p>
                    </div>
                    <div className="total">
                        <p>Total</p><br />
                        <span>/ pessoa</span>
                        <p>R$ {total.toFixed(2)}</p>
                    </div>
                </div>
                <button onClick={handleLimpar}>Limpar</button>
            </section>
        </main>
    )
}