const super_secret_key = "password123";  // you can't change the value bc strings are immutable
//tell me a fact baout strings and objects in js?
//answer: they are immutable

// super_secret_key = 'new string boi'; //will not work

//differences between let and var:

{
    {
        {
            {
                let sample ="hi there"; //scoping is inside a curly brace
            }
            console.log(sample); //works if var  does not with let, let is only accessible within that scope
        }
    }
}

