//stemmer
var stemmer = new Snowball('English');

corpus1=["A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. 'How shall I climb out?' said the mouse. 'oh, how shall I climb out?' Just then a rat came along, and he heard the mouse. 'Mouse,' said the rat, 'if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.'"];

corpus2=["A wolf carried off a lamb. The lamb said, 'I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.' The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock."]

corpus3=["A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. 'Why does he not make a pet of me?' said the donkey. 'It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair.' Then the donkey said to himself, 'If I do what the dog does, he may make a pet of me.' So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, 'Help! Help!' Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. 'I only did what the dog does,' said the donkey,' and yet they make a pet of the dog, and they beat me with sticks. It is not fair."]


var corpus =  ["A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. \"How shall I climb out?\" said the mouse. \"oh, how shall I climb out?\" Just then a rat came along, and he heard the mouse. \"Mouse,\" said the rat, \"if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.",
			   "A wolf carried off a lamb. The lamb said, \" I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.\" The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.",
			   "A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \"Why does he not make a pet of me?\" said the donkey. \"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.\" Then the donkey said to himself, \"If I do what the dog does, he may make a pet of me.\" So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, \"Help! Help!\" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. \"I only did what the dog does,\" said the donkey,\" and yet they make a pet of the dog, and they beat me with sticks. It is not fair."];

let selection = document.getElementById("choose");

var wc,uc;
var para="";

function showCorpus(){
	
	if(selection.value ==='Corpus1'){
                     document.getElementById("s5").innerHTML="";
                    document.getElementById("s6").innerHTML="";
                    document.getElementById("s7").innerHTML="";
                    document.getElementById("s8").innerHTML="";
                    document.getElementById("s9").innerHTML="";
                    document.getElementById("s10").innerHTML="";
                   document.getElementById("s11").innerHTML="";
                    document.getElementById("s12").innerHTML="";
		document.getElementById("s1").innerHTML=corpus1;
		
        document.getElementById("s2").innerHTML="Enter the number of tokens and types for the above corpus:"
	document.getElementById("s3").innerHTML="<table border='1' ><tr><td>Tokens</td><td><input type ='number' id='token'></td></tr><tr><td>Types</td><td><input type ='number' id='type'></td></tr></table>";

		document.getElementById("s4").innerHTML="<button  onclick='check()'>Submit</button>";

       para=corpus[0];
		
}

	else if(selection.value ==='Corpus2')
{
                      else if(selection.value ==='Corpus2'){
        document.getElementById("s5").innerHTML="";
        document.getElementById("s6").innerHTML="";
        document.getElementById("s7").innerHTML="";
         document.getElementById("s8").innerHTML="";
    document.getElementById("s9").innerHTML="";
        document.getElementById("s10").innerHTML="";
        document.getElementById("s11").innerHTML="";
        document.getElementById("s12").innerHTML="";
		document.getElementById("s1").innerHTML=corpus2;
        document.getElementById("s2").innerHTML="Enter the number of tokens and types for the above corpus:"
	document.getElementById("s3").innerHTML="<table border='1' ><tr><td>Tokens</td><td><input type ='number' id='token'></td></tr><tr><td>Types</td><td><input type ='number' id='type'></td></tr></table>";

		document.getElementById("s4").innerHTML="<button onclick='check()'>Submit</button>";

		 para=corpus[1];
		
}

	else if(selection.value ==='Corpus3')
{
           document.getElementById("s5").innerHTML="";
        document.getElementById("s6").innerHTML="";
        document.getElementById("s7").innerHTML="";
    document.getElementById("s8").innerHTML="";
    document.getElementById("s9").innerHTML="";
    document.getElementById("s10").innerHTML="";
        document.getElementById("s11").innerHTML="";
        document.getElementById("s12").innerHTML="";
		document.getElementById("s1").innerHTML=corpus3;
        document.getElementById("s2").innerHTML="Enter the number of tokens and types for the above corpus:"
	document.getElementById("s3").innerHTML="<table border='1' ><tr><td>Tokens</td><td><input type ='number' id='token'></td></tr><tr><td>Types</td><td><input type ='number' id='type'></td></tr></table>";

        document.getElementById("s4").innerHTML="<button  onclick='check()'>Submit</button>";
    para=corpus[2];
		
           }
    else if(selection.value ==='null'){
        document.getElementById("s1").innerHTML="";
        document.getElementById("s2").innerHTML="";
        document.getElementById("s3").innerHTML="";
         document.getElementById("s4").innerHTML="";
        document.getElementById("s5").innerHTML="";
        document.getElementById("s6").innerHTML="";
        document.getElementById("s7").innerHTML="";
    document.getElementById("s8").innerHTML="";
    document.getElementById("s9").innerHTML="";
    document.getElementById("s10").innerHTML="";
        document.getElementById("s11").innerHTML="";
        document.getElementById("s12").innerHTML="";
	}
}

function c(){
    
    document.getElementById('s8').innerHTML="Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types";
	document.getElementById("s6").innerHTML="";
          document.getElementById("s5").innerHTML="";
          document.getElementById("s7").innerHTML="";
          document.getElementById('s9').innerHTML="#New types:";
          document.getElementById('s10').innerHTML="<input id='newtype' type=text>";
          document.getElementById("s11").innerHTML = "<button onclick='newtypes()'>Submit</button>";
    
}

//stemming

function newtypes(){
    var str =para;

  // to get coorect answer
    var u = new Set(["of","the","to","up","can","than","did","me","you","off","does","very"])

str=str.replace(/[^a-zA-Z ]/g, "");
    str= str.toLowerCase();
	str = str.split(" ");
	var s=[];
          var j=0;
	for(var i=0; i<str.length-1;i++){
                   
                if(u.has(str[i])){
                        continue;
                }
             else
                {
		stemmer.setCurrent(str[i]);     
		stemmer.stem();
		s[i] = stemmer.getCurrent();
                     j++;
        }
}
    
    s = new Set(s);
	s = Array.from(s);
    console.log(s);

    let val = document.getElementById("newtype").value;

    //comparisons
    
    if(val == s.length)
{

      //displaying answer
        document.getElementById("s12").innerHTML = "<center><font color='Green' style = 'font-size:20px'>Right answer</font></center>"
         document.getElementById("newtype").style.backgroundColor =  "Green"
        
    }
    else
{

    //displaying answer

        document.getElementById("s12").innerHTML ="<center><font color='Red' style = 'font-size:20px'>Wrong answer</font></center>"
        document.getElementById("newtype").style.backgroundColor = "Red"
    }
	
	
}


function check(){

    var w=para;

    var p = /\w+/ig;
		var str = w.match(p);
        //word count
		wc = str.length; 
		var s1 = str.join(" ");
		var s2 = s1.toLowerCase();
		var s = s2.split(' ');
		var uniquewords = new Set(s);
        //unique word count
		uc= uniquewords.size;

  var tokens = document.getElementById('token').value;
	var types = document.getElementById('type').value;
	if(wc == tokens){
		document.getElementById('token').style.backgroundColor = "Green";
	}
	else{
		document.getElementById('token').style.backgroundColor = "Red";
	}		}
} 	
	if(uc == types){
		document.getElementById('type').style.backgroundColor = "Green";
	}
	else{
		document.getElementById('type').style.backgroundColor = "Red";
	}
	if((wc == tokens) && (uc == types)){
		document.getElementById("s5").innerHTML= "<center><font color='Green' style = 'font-size:20px'>Right answer</font></center>"
         document.getElementById("s7").innerHTML = "<button  onclick='c()'>Continue</button>";
	}
	else
           {
		document.getElementById("s6").innerHTML = "<center><font color='Red' style = 'font-size:20px'>Wrong answer</font></center>"
	}


}
