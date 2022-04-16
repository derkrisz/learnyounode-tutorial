const args = process.argv.slice(2);
const sumWithInitial = args.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), 0);
console.log(sumWithInitial)


/* official solution

 let result = 0
    
    for (let i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }
    
    console.log(result) */