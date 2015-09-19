# Easy_JS_Form_Validation

It's an easy way to add some client-side validation to your form. It checks user's input and - if validation fails - writes validation messages for each one of failed input fields.

The code has helpful comments!






HTML

Download Easy-JS-Form-Validation files and don't forget to add links with correct paths to those files on you page. HTML structure for an input field can look something as below. The only required element for HTML structure is an empty <div></div> after each input field. This is where the validation message appears if the validation failed.

And don't forget to add <data="easyValidation"> to each of your input fields.

   
    
    <!-- Input field for First Name -->
        <label for="name">First Name:</label>
        <input type="text" class="form-control" name="firstName" data="easyValidation" required>
        <div></div>

    <!-- Input field for Last Name -->
        <label for="email">Last Name:</label>
        <input type="text" class="form-control" name="lastName" data="easyValidation" required>
        <div></div>
 




   
CSS

To make validation event more obvious, Easy-JS-Form-Validation adds .js-validation-msg class to the empty <div></div> with validation message. You can use default Easy-JS-Form-Validation CSS styles for this class or write your own.

   
    
    <!--Styling validation message-->
    .js-validation-msg {
        padding: 1rem;
        background-color: #c7254e;
        color: #fff;
    }

    <!--Styling input field, that didn't pass the validation; you can use the Bootstrap one (as in example) or write your own-->
    .alert-danger {
        color: #a94442;
        background-color: #f2dede;
        border-color: #ebccd1;
    }
 




   
JS

jQuery is required.

You can easily alter the text of validation messages, add and remove additional input fields according to your needs.

Note:

In order to add new input field to Easy-JS-Form-Validation, you need to add new key-value pair into validationFunctions object (in formValidation.js file), where key = name of your input field and value = an array of validation rulls you want to run for the new input filed.

   
    
    <!--Adding new input fields of "First Name" and "Last Name" to the validationFunctions object-->
    var validationFunctions = {

    . . .
    firstName: ['validateNotEmpty', 'validateMinLength', 'validateOnlyLetters'],
    lastName : ['validateNotEmpty', 'validateMinLength', 'validateOnlyLetters']
    };