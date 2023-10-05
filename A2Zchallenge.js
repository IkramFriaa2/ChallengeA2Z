function find_longest_word(str) 
{
	// removing any special character

	var words_array = str.split(' ').map((word) => word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, ''));
  var longest_word, 
  		ignore_characters, 
      longest_word_length = 0,
  		vowels_number = 0,
  		get_vowels = 0;
  
  for(var i = 0; i < words_array.length; i++){
  	ignore_characters = words_array[i];
    get_vowels = ignore_characters.match(/[aeiou]/ig)
    
    
    // Compare number of vowels of two commun lenght words
    
    if(ignore_characters.length > longest_word_length && get_vowels.length > vowels_number){ 
			longest_word_length = words_array[i].length;
      longest_word =  words_array[i]
      vowels_number = longest_word.match(/[aeiou]/ig).length
     }
  }
  console.log(longest_word)
}

// INPUT TEST EXAMPLE

//var str= "We will go to the parking"
var str = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
    
//var str="We will go to the parking pàrking"

// Function call 
find_longest_word(str)