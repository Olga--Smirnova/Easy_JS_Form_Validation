/* Form Validation Objects
 *************************************************************************************
 |       Author:    Olga Smirnova
 | Date Created:    01.09.2015
 |       Source:    https://github.com/Olga--Smirnova/Easy_JS_Form_Validation
 *************************************************************************************
**/





/* validationFunctions object
 *------------------------------------------------------------------------------------
 | contains arrays of validation methods names for the particular input field,
 | where KEY = input name
 |       VALUE = array of validation methods
 |
 | !NOTE name of the key should be the same as the corresponding name of input field.
 |
 *------------------------------------------------------------------------------------
**/
var validationFunctions = {

    name        : ['validateNotEmpty', 'validateMinLength', 'validateOnlyLetters'],
    email       : ['validateNotEmpty', 'validateEmail'],
    url         : ['validateNotEmpty', 'validateUrl'],
    phone       : ['validateNotEmpty', 'validateMinLength', 'validatePhone'],
    checkbox    : ['validateCheckbox'],
    comment     : ['validateNotEmpty', 'validateMinLength', 'validateTextarea']

};

/* errorMessages object
 *------------------------------------------------------------------------------------
 | contains different error messages for validation methods.
 |
 | !NOTE name of the error mesage should be the same as the name of corresponding validation method,
 |
 *------------------------------------------------------------------------------------
**/
var errorMessages = {

    validateNotEmpty    : "*Field can't be empty",
    validateMinLength   : "*Your input is too short",
    validateOnlyLetters : "*Letters and spaces only, please",
    validateEmail       : "*Need a valid email address",
    validateUrl         : "*Need a valid url",
    validatePhone       : "*Need a valid Phone number",
    validateCheckbox    : "*Field is required",
    validateTextarea    : "*Letter, spaces and punctuation signs only"

};


/* validateForm object
 *------------------------------------------------------------------------------------
 | contains different validation methids for input fields.
 |
 | @val    - str - input field value
 | @return boolean
 |
 *------------------------------------------------------------------------------------
**/
var validateForm = {

    // Check if the input field is empty
    validateNotEmpty: function(val)
    {
        return (val.length > 0);
    },

    // Check if the input field is of the min number of characters
    validateMinLength : function(val)
    {
        return (val.length >= 2);
    },

    // Check if the input field is of the max number of characters
    validateMaxLength : function(val, max)
    {
        return (val.length <= max);
    },

    // Check letters and spaces
    validateOnlyLetters: function(val)
    {
        var regex = /^([a-zA-Z ])+$/;
        return regex.test(val);
    },

    // Check numbers only
    validateOnlyNumbers: function(val)
    {
        var regex = /^[0-9]+([\s0-9]+)*$/;
        return regex.test(val);
    },

    // Check letters and numbers
    validateLettersNumbers : function(val)
    {
        var regex = /^[a-zA-ZÀ-ž0-9]+([\sa-zA-ZÀ-ž0-9]+)*$/;
        return regex.test(val);
    },

    // Check letters, spaces and punctuation signs
    validateTextarea : function(val)
    {
        var regex = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/;
        return regex.test(val);
    },

    // Check phone: numbers, spaces, -, +, ()
    validatePhone : function(val)
    {
        var regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        return regex.test(val);
    },

    // Check email
    validateEmail : function(val)
    {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(val);
    },

    // Check url
    validateUrl : function(val)
    {
        var regex = /^http\:\/\/[a-zA-ZÀ-ž0-9\-\.]+\.[a-zA-ZÀ-ž]{2,}(\/\S*)?$/;
        return regex.test(val);
    },

    // Check checkbox
    validateCheckbox : function(val)
    {
        return val.checked;
    }
};

/*----------------------------------------------------------------------------------
    | FORM VALIDATION
----------------------------------------------------------------------------------*/


/* showErrorMessage Function
 *------------------------------------------------------------------------------------
 |
 | @field_name  - str - name of the input field, that didn't pass validation
 | @error_msg   - str - error message for the particular validation rule
 |
 | adds 'alert-danger' class to @field_name
 | shows error message
 |
 *------------------------------------------------------------------------------------
**/
function showErrorMessage(field_name, error_msg)
{
    // To indicate the incorrectly filled input field
    $('[name='+field_name+']').toggleClass('alert-danger', true);

    // To show the error message
    $('[name='+field_name+']').next().toggleClass('js-validation-msg', true);
    $('[name='+field_name+']').next().html(error_msg);
}


/* hideErrorMessage Function
 *------------------------------------------------------------------------------------
 | 
 | @field_name  - str - name of the input field, that passed validation
 |
 | removes 'alert-danger' class from @field_name
 | hides error message
 |
 *------------------------------------------------------------------------------------
**/
function hideErrorMessage(field_name)
{
    // To remove indication of the incorrectly filled input field
    $('[name='+field_name+']').toggleClass('alert-danger', false);

    // To hide the error message
    $('[name='+field_name+']').next().toggleClass('js-validation-msg', false);
    $('[name='+field_name+']').next().html('');
}


/* runValidation Function
 *------------------------------------------------------------------------------------
 | 
 | @field_name  - str - name of the input field, which value will be validated
 | @val         - str - value of the input field, which value will be validated
 |
 | @return      boolean
 |              showErrorMessage - when validation failed
 |              hideErrorMessage - when validation passed
 |
 *------------------------------------------------------------------------------------
**/
var i;
function runValidation(field_name, val)
{
    // loop throughout all validation methods for the particular input field (those methodes were set in "validationFunctions Object")
    for(i=0; i<validationFunctions[field_name].length; ++i)
    {
        if (! validateForm[validationFunctions[field_name][i]](val))
        {
            // if input field didn't pass validation methods, show error (errors corresponding for the particuler validation method was set in "errorMessages Object")
            showErrorMessage(field_name, errorMessages[validationFunctions[field_name][i]]);
            return false;
        }

        // if input field passed validation, hide error
        hideErrorMessage(field_name);
    }
}

/* On form input fields Blur Events fire validation functions from validateForm object
 *------------------------------------------------------------------------------------
**/
    $('[data="easyValidation"]').blur(function()
    {   
        var field_name = this.getAttribute('name');
        runValidation(field_name, this.value);
    });

// Checkbox
    $('[name=checkbox]').blur(function()
    {
        var field_name = this.getAttribute('name');
        runValidation(field_name, this);
    });
