//const square = function  (x) {
//return x * x
//}
//console.log(square)
//const square = (x) => {
  //  return x * x
//}
//const square = (x) => x * x
//console.log(square(2))
const event = {
    name: 'birthday party',
    guestList: ['zain','moayad'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending ' + this.name)
        }
        )
    }
} 
event.printGuestList()