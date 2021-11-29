
let iadulto = document.getElementById("adulto")
let icrianca = document.getElementById("crianca")
let ihoras = document.getElementById("duracao")


let resultado = document.getElementById("resultado")




function calc(){
    console.log("calcular");



    let adult = iadulto.value;
    let cria = icrianca.value
    let horas = ihoras.value 

    let carne = (adult * quantidadeC(horas)) + ((cria * quantidadeC(horas))/2)
    let ceva = (adult * cerveja(horas));
    let drin = (adult * drink(horas)) + ((cria * drink(horas))/2) 
    console.log("carne", carne,"Ceva", ceva,"drink", drin);

        function ca(carne){
            if (carne > 1000){
                return  Math.ceil(carne/1000) + " kg" 
            }else{ return carne + " g"}
        }
        
    
        function ce(ceva){
                
                let lata = Math.ceil(ceva/350)
                let fardo = Math.ceil(lata/12)
                if (lata > 12){
                    return fardo +" fardinhos"
                }else{
                    return lata + " latas"
                }
    }
    
        function be(drin){
        if (drin > 1000){
            return  Math.ceil(drin/1000) + " L" 
        }else{ return Math.ceil(drin) + " ml"
    }
    }
   

    resultado.innerHTML = `<p>${ca(carne)} de carne`;
    resultado.innerHTML += `<p>${ce(ceva)} de cerveja`;
    resultado.innerHTML += `<p>${be(drin)} de bebidas`;
}
      
    function quantidadeC(horas){
        if (horas >= 6){
            return 600;
        } else {
            return 400;
        }
    }


    function cerveja(horas){
        if (horas >= 6){
            return 2000;
        } else {
            return 1000;
        }
    }


    function drink(horas){
        if (horas >= 6){
            return 1500;
        } else {
            return 1200;
        }
    }

