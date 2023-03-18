// // function a(){
// // console.log("inside a");

// //     function b(){
// //       console.log("inside b");
// //     }
    
// // }
// // a();

// // var str="       amruthraj rtgsehez erhgeg          ";
// // var str2="swarna";
// // var s=str.concat(" ",str2);
// // console.log(str.concat(str2));
// // console.log(s.endsWith("swarna"));
// // // console.log(str.charCodeAt(0));
// // console.log(s);
// // console.log(str.includes("raj"));
// // console.log(str.split(" "));
// // var arr =str.split(" ");
// // console.log(arr[0].includes("amruth"));
// // var s=arr.toString();
// // console.log(s);
// // console.log(s.lastIndexOf(","));

// // console.log(str.replaceAll(" ",""));
// // var i="a"
// // var a=Number(i);
// // console.log(str.slice(0,9))
// // console.log(str.length);
// // var x=str.trim();
// // console.log(x.length)
// var str ="1n 2n 3n 4n 5n 6n"
// // console.log(str.match(/is/gi));
// // console.log(str.startsWith("this is"));
// // let regex=/(0|1)/g;
// console.log(str.switch(/[0-9]/gm));
// var d=5
// var a =10;
// function add(b){
//   var c=a+b+d;  
//   return c;
// }
// // console.log(a);
// console.log(add(10));
// // console.log(add(3));
// const lookup = {
//   'A': 'N','B': 'O','C': 'P','D': 'Q',
//   'E': 'R','F': 'S','G': 'T','H': 'U',
//   'I': 'V','J': 'W','K': 'X','L': 'Y',
//   'M': 'Z','N': 'A','O': 'B','P': 'C',
//   'Q': 'D','R': 'E','S': 'F','T': 'G',
//   'U': 'H','V': 'I','W': 'J','X': 'K',
//   'Y': 'L','Z': 'M', '?': '?', ',': ','
// };
// var s="AMRUTH"
// var n ="";
// for(var i=0;i<s.length;i++)
// {

//   n+=lookup[s.charAt(i)];
// }
// console.log(n);
// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line
	var arraywords=encodedStr.split(" ");
	
	for(var i=0;i<arraywords.length;i++)
		{
			var newstring="";
			var stringword=arraywords[i];
      // console.log(stringword);
			for(var j=0;j<stringword.length;j++)
				{
					newstring+=lookup[stringword.charAt(j)];
				}
			decodedArr.push(newstring);
		}
  return decodedArr;//return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
