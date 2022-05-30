//toLocaleString() = returns a string with a language
//  sensitive representation of this

//  number.toLocaleString(locale, {options});
//  'locale' = specify that language (undefined = default)
//  'options' = object with formatting options 

let myNum = 123456.789;

    // myNum = myNum.toLocaleString("en-US");  //US ENLIGSH
    // myNum = myNum.toLocaleString("hi-IN");  //HINDI INDIA
    // myNum = myNum.toLocaleString("de-DE");  //GERMAN
    // myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});  //US ENLIGSH
    // myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "USD"});  //HINDI INDIA
    // myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});  //GERMAN

    myNum = myNum.toLocaleString(undefined, {style: "percent"})


console.log(myNum);