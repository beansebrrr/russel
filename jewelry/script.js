function populate(parent) {
  const parentElement = document.querySelector(parent)
  const childElements = Array.from(parentElement.querySelectorAll(".card"));

  console.log(childElements);

  shuffle(childElements).forEach(child => {
    parentElement.appendChild(child.cloneNode(true))
  });
}


const shuffle = (arr) => {
  const randomNum = (max, min=0) => {
    return Math.round(Math.random() * (max - min)) + min 
  }
  for (let i = arr.length-1; i > 0; i--) {
    const randIndex = randomNum(i, 0)
    const temp = arr[i]
    arr[i] = arr[randIndex]
    arr[randIndex] = temp
  }
  return arr
}


// populate("#rings .shop-grid")

