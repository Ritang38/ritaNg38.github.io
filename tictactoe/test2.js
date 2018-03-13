let turn = 0
const boxes = document.querySelectorAll('#board div')
 

function currMarker() {
  if (turn % 2 == 0) {
    return 'X'
  } else {
    return 'O'
  }
}
 

function checkWinner(marker) {
  if ( (boxes[0].innerHTML == marker && boxes[1].innerHTML == marker && boxes[2].innerHTML == marker) ||
       (boxes[3].innerHTML == marker && boxes[4].innerHTML == marker && boxes[5].innerHTML == marker) ||
       (boxes[6].innerHTML == marker && boxes[7].innerHTML == marker && boxes[8].innerHTML == marker) ||
       (boxes[0].innerHTML == marker && boxes[3].innerHTML == marker && boxes[6].innerHTML == marker) ||
       (boxes[1].innerHTML == marker && boxes[4].innerHTML == marker && boxes[7].innerHTML == marker) ||
       (boxes[2].innerHTML == marker && boxes[5].innerHTML == marker && boxes[8].innerHTML == marker) ||
       (boxes[0].innerHTML == marker && boxes[4].innerHTML == marker && boxes[8].innerHTML == marker) ||
       (boxes[2].innerHTML == marker && boxes[4].innerHTML == marker && boxes[6].innerHTML == marker) ) {
       
      alert(marker + ' wins!')
      location.reload();
   }
  }

for (let box of boxes) {
  box.onclick = function() {
    if (box.innerHTML == '&nbsp;') {
      box.innerHTML = currMarker()
      checkWinner(currMarker())
      turn++
    } else {
      alert('Invalid move!')
    }
  }
}