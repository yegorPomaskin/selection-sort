const form = document.getElementById("form")
const sortBtn = document.getElementById("sort-btn")
const output = document.getElementById("output")


const isValid = (numStr, ints) => {
    let errText = ""
    if (!numStr) {
        errText = "Please enter some numbers"
    } else if (ints < 1) {
        errText = "Please enter numbers that bigger than one"
    } else {
        return true
    }

    output.innerText = errText
    return false
}

form.addEventListener('submit', e => {
    e.preventDefault();
    updateUi()
});

sortBtn.addEventListener("click", () => {
    updateUi()
})

const selectionSort = (arr) => {
    
   for (let i=0; i<arr.legnth - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j
        }
    }
    if(i !== minIndex){
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp; 
    }
    
   }
   return arr
}

const updateUi = () => {
  const numStr = document.getElementById("numbers").value
  const ints = parseInt(numStr, 10)
    output.innerText = ""
  if (isValid(numStr, ints)) {
    let arr = Array.from(String(ints), Number)
    output.innerText = selectionSort(arr)
  }

}