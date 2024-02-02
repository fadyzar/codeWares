// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
export function twoOldestAges(ages: number[]): number[] {
    let first:number =  0;
    let second:number = 0;
    let index:number = 0;
    for(let i=0 ; i<ages.length ; i++){
        if(ages[i] > first){
            first = ages[i]
            index = i ;
        }
    }

    for(let i=0 ; i<ages.length ; i++){
        if(ages[i] > second && ages[i] < first  ){
            second = ages[i]
        }
    }
   
    for(let i=0 ; i<ages.length ; i++){
        if(ages[i] === first && i != index ){
            second = ages[i]
        }
    }
    
    
    
    return [second,first];
  }

  console.log(twoOldestAges([26,5,18,84,35,96,92,19,19,31,90,90,47,52,94,29,96,47,16,3,36]));
  