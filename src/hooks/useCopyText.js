import { useState } from "react";

export default () => {
    const [copyText, setCopyText] = useState("Copiar!")

    const copyTextNav = async (password) => {
        try {
            await navigator.clipboard.writeText(password);
            alert("Texto copiado para a área de transferência!");
            setCopyText("Copiado!")
            setTimeout(()=> {
                setCopyText("Copiar!")
            },1000*1)
        } catch (err) {
            alert("Falha ao copiar o texto: ", err);
            console.log("Falha ao copiar o texto: ", err.message,"\n",err);
        }
        
    };

    return {copyText,copyTextNav}
}