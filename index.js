function introduction (name){
    return "Hi, my name is "+name+".";
}
const result = introduction ("levent");

function introductionWithLanguage(name, language){
    return "Hi, my name is "+name+ " and I am learning to program in " +language+".";

}
const r1 = introductionWithLanguage("levent", "JS")
console.log (r1);

function   introductionWithLanguageOptional(name, language= "JavaScript"){
    return "Hi, my name is "+ name +" and I am learning to program in " + language +".";
}
const r2=   introductionWithLanguageOptional("Kagan");
console.log (r2);