export class CounterService {
  activeToInactiveCounter : number = 0;
  inactiveToActiveCounter : number = 0;

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log(`Active to Inactive counter : + ${this.activeToInactiveCounter}`)
  }

  incrementInActiveToActive(){
    this.inactiveToActiveCounter++;
    console.log(`Inactive to Active counter : + ${this.inactiveToActiveCounter}`)
  }
}
