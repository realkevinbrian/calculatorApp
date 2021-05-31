# calculatorApp
Developing a calculator App 

#Algorith I used to create to the calculator

Skills I will be Practising

1-If/else statements
2-For loops
3-JavaScript functions
4-Arrow functions
5-&& and || operators
6-How to change the text with the textContent 7property
8-How to add event listeners with the event 9-delegation pattern


Building process

1- listen for all keypresses 
2-determine the type of key that is pressed
3-we can use the data-action attribute to determine the type of key that is clicked.
    3.1-If the key does not have a data-action attribute, it must be a number key.

    3.2-If the key has a data-action that is either add, subtract, multiply or divide, we know the key is an operator.

    3.3.-If the key has a data-action that is decimal , clear , equal 

4-When a user hits a number key

    4.1-if the calculator shows 0 (the default number), the target number should replace zero.

    4.2-If the calculator shows a non-zero number, the target number should be appended to the displayed number.

5-When a user hits the decimal key

    5.1-When you hit the decimal key, a decimal should appear on the display. If you hit any number after hitting a decimal key, the number should be appended on the display as well.

6-When a user hits an operator key

    6.1-If you hit an operator key, the operator should be highlighted so you know the operator is active.

7-When a user hits a number key after an operator key

    7.1-When you hit a number key again, the previous display should be replaced with the new number. The operator key should also release its pressed state.

    7.2-. Let’s call this custom attribute data-previous-key-type and set it to operator value;

    7.3-If the previousKeyType is an operator, we want to replace the displayed number with clicked number.

8-When a user hits the equals 

    8.1-When you hit the equals key, the calculator should calculate a result that depends on three values: 

    -The first number entered into the calculator
    -The operator
    -The second number entered into the calculator

        8.1.1-At this point, we only know the second number;

        8.1.2-To get the first number, we need to store the calculator’s displayed value before we wipe it clean.

        8.1.3-One way to save this first number is to add it to a custom attribute when the operator button gets clicked.

        8.1.4-To get the operator, we can also use the same technique.
    
    
    8.2-After the calculation, the result should replace the displayed value.

        8.2.1 - To display the result we need to set the calculate function to the display box.

        8.2.2-That means we need to create a calculate function. It should take in three parameters: the first number, the operator, and the second number.

            Inside the function

            1-If the operator is add, we want to add values together.

            2-If the operator is subtract, we want to subtract the values, and so on.

            3-Remember that firstValue and secondValue are strings at this point.

                3.1-So, before calculating the result, we want to convert strings to numbers.

                
                




