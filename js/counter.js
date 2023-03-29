const numbers = document.querySelectorAll(".counter")

numbers.forEach( num  => {
    num.innerHTML = "0"
    function changeNum(){
        const finalNum = +num.getAttribute("data-num")
        let value = +num.innerHTML
        let step = finalNum / 100

        if(value < finalNum){
            num.innerHTML = Math.ceil(value + step)
            setTimeout(changeNum, 100) //100 это секунда скорость цифры
        }
    }
    changeNum()
})