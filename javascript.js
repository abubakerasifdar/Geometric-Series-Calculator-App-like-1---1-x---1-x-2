// 30 line of code 15 line of code is logical and other is general code....
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        myFunction();

    }
})
function myFunction() {
    let input = Number(document.getElementById('input').value);
    let range = Number(document.getElementById('range').value);
    let result = "";
    let count = '';
    // this is for the 1 left part of series 
    for (let i = 1; i <= range; i++) {
        count += `${(1 / (input**i))}, `;
        console.log(i);
    }
    arraycount = count.split(",")
    len = arraycount.length;
    var Sum = 0;
    var Series = "";
    for (let j = 0; j < len - 1; j++) {
        Series += arraycount[j] + "<br>"
        Sum += Number(arraycount[j])
        console.log(Sum, "Sum is Started");
    }
    let finalSeries = 1 + Sum;
    result = `Your Entered: ${input} & <br> Series Upto ${input} is Following:<br> 1 <br> ${Series} The Total Sum of This Series is:${finalSeries}`;
    document.getElementById('output').style.display = "flex";
    document.getElementById('output').innerHTML = result;
}