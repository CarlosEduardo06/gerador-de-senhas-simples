import { useState } from "react";

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numbers = '0123456789'.split('');
const specials = '!@#$%^&*()-_=+[]{};:,.<>/?|\\'.split('');

export default ()=> {
    const [password, setPassword] = useState("Sua senha sera gerada aqui")
    
    const generatePassword = (config) => {
        console.log(config);
        let set = [];
        let password = "";

        if (config.upperCase) set = set.concat(letrasMaiusculas);
        if (config.lowerCase) set = set.concat(letrasMinusculas);
        if (config.numbers) set = set.concat(numbers);
        if (config.specials) set = set.concat(specials);

        if(set.length == 0){
            alert("Você precisa incluir pelo menos uma configuração de caracteres")
            return
        }

        if(config.length < 5){
            console.log("O tamanho minímo deve ser 5, faz o bagulho direito karai")
            alert("O tamanho minímo deve ser 5, faz o bagulho direito karai")
            return
        }

        if(config.length > 30){
            config.length = 30;
            console.log("O tamanho máximo de caracteres para a senha é 30!");
            alert("O tamanho máximo de caracteres para a senha é 30!");
        };

  
        for(let i = 0; i < config.length; i++){
            const randomIndex = Math.floor(Math.random() * set.length);
            password += set[randomIndex];
        }

        setPassword(() => password)
    }

    

    return {password,generatePassword}
}