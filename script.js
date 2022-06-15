const result = document.querySelector(".resultado")
        function insert (valor) {
            result.innerHTML += valor
        }
        
        function clean () {
            result.innerHTML = " "
        }

        function backSpace () {
            let deletOneForOne = document.querySelector(".resultado").innerHTML
            result.innerHTML = deletOneForOne.substring(0, deletOneForOne.length -1)
        } 

        function calculator () {
            if (result.textContent != 'Error'){
                result.innerHTML = eval(result.textContent)
            }
        }       