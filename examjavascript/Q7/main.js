function getDayName(b) {
    switch (b) {
        case 1:
             console.log("Mon"); 
            break;
        case 2:
             console.log("Thu"); 
            break;    
        case 3:
            console.log("wed"); 
            break;
        case 4:
            console.log("Tue");
            break;
        case 5:
            console.log("Fri");
            break; 
        case 6:
            console.log("sat");
            break;
        case 7:
            console.log("sun");
            break;
                          
        default:
            console.log("Please choose day wisely");
            
            break;
    }
}
let cop = getDayName(5)
console.log(cop);
