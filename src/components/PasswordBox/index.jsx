import styles from "./styles.module.css"
import usePassword from "../../hooks/usePassword"
import useCopyText from "../../hooks/useCopyText";
import Modal from "../Modal";
import {useState } from "react";

const configure = {
    upperCase: false,
    lowerCase: true,
    numbers: false,
    specials: false,
    length: 30
};


export default ()=> {
    const {password, generatePassword} = usePassword();
    const {copyText, copyTextNav} = useCopyText();
    const [config, setConfig] = useState(configure)
    const [activated, setActivated] =  useState(false)
    
    const checkingActivation = () => {
        if(activated) setActivated(false)
        else setActivated(true)
        console.log(activated)
    }
    
    return <>
        <div className={styles.passwordBox}>
            <span
                onClick={checkingActivation}
                id={styles.modalOpen}>
                +
            </span>
            <Modal className={`${activated ? styles.active : styles.disabled}`}>
                <h3>CONFIGURAÇÃO</h3>
                <label htmlFor="upperCase">
                    <span>MAIUSCULAS</span>
                    <input 
                        onChange={
                        (ev) => setConfig((currentState) => 
                        ({...currentState, upperCase: ev.target.checked}))
                        } 
                        type="checkbox" 
                        name="upperCase" 
                        id="upperCase" 
                        checked={config.upperCase}
                    />
                </label>

                <label htmlFor="lowerCase">
                    <span>MINUSCULAS</span>
                    <input
                        onChange={
                        (ev) => setConfig((currentState) => 
                        ({...currentState, lowerCase: ev.target.checked}))
                        } 
                        type="checkbox" 
                        name="lowerCase" 
                        id="lowerCase" 
                        checked={config.lowerCase}/>
                </label>

                <label htmlFor="numbers">
                    <span>NUMEROS</span>
                    <input 
                        onChange={
                        (ev) => setConfig((currentState) => 
                        ({...currentState, numbers: ev.target.checked}))
                        }                         
                        type="checkbox" 
                        name="numbers" 
                        id="numbers" 
                        checked={config.numbers}
                        />
                </label>

                <label htmlFor="specials">
                    <span>CARACTERES ESPECIAIS</span>
                    <input 
                        onChange={
                        (ev) => setConfig((currentState) => 
                        ({...currentState, specials: ev.target.checked}))
                        }                         
                        type="checkbox" 
                        name="specials" 
                        id="specials" 
                        checked={config.specials}
                        />
                </label>

                <label htmlFor="length">
                    <span>TAMANHO</span>
                    <input 
                        onChange={
                        (ev) => setConfig((currentState) => 
                        ({...currentState, length: ev.target.value}))
                        }                         
                        type="range" 
                        name="length" 
                        id="length" 
                        value={config.length}
                        max={30}
                        />
                    <span>{config.length}</span>
                </label>

            </Modal>
            <h1>GERADOR DE SENHAS</h1>
            <div>
                <button onClick={() => generatePassword(config)}>Gerar!</button>
                <button onClick={() => copyTextNav(password)}>{copyText}</button>
            </div>
            <span onClick={() => copyTextNav(password)} className={styles.generatedPassword}>{password}</span>
        </div>

    </>
}