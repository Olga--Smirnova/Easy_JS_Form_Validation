# Simple_JS_Form_Validation

<p>It's an easy way to add some JavaScript validation to your form. It checks user's input and - if validation fails-  writes validation messages for each one of failed input fields.</p>
<p>The code has helpful comments!</p>

<h3>HTML</h3>
<p>HTML structure for an input field can look something as below. The only required element for HTML structure is an empty <b>&lt;div&gt;&lt;/div&gt;</b> after each input field. This is where the validation message appears if the validation failed.</p>
<p>And don't forget to add <b>&lt;data="easyValidation"&gt;</b> to each of your input fields.</p>
<pre>	
  	<code>
  	&lt;!-- Input field for First Name --&gt;
  		&lt;label for="name"&gt;First Name:&lt;/label&gt;
  		&lt;input type="text" class="form-control" <b>name="firstName" data="easyValidation"</b> required&gt;
  		&lt;div&gt;&lt;/div&gt;

	&lt;!-- Input field for Last Name -->
  		&lt;label for="email">Last Name:&lt;/label&gt;
  		&lt;input type="text" class="form-control" <b>name="lastName" data="easyValidation"</b> required&gt;
  		&lt;div&gt;&lt;/div&gt;
  	</code>
</pre>


<h3>CSS</h3>
<p>To make validation event more obvious, Easy-JS-Form-Validation adds <b>.js-validation-msg</b> class to the empty <b>&lt;div&gt;&lt;/div&gt;</b> with validation message. You can use default Easy-JS-Form-Validation CSS styles for this class or write your own.</p>
<pre>	
  	<code>
  	&lt;!--Styling validation message--&gt;
  	<b>.js-validation-msg</b> {
		padding: 1rem;
		background-color: #c7254e;
		color: #fff;
	}

	&lt;!--Styling input field, that didn't pass the validation; you can use the Bootstrap one (as in example) or write your own--&gt;
  	<b>.alert-danger</b> {
    	color: #a94442;
    	background-color: #f2dede;
    	border-color: #ebccd1;
	}
  	</code>
</pre>



<h3>JS</h3>
<p>You can easily alter the text of validation messages, add and remove additional input fields according to your needs.</p>
<p><b>Note:</b></p>
<p>In order to add new input field to Easy-JS-Form-Validation, you need to add new <b>key-value pair</b> into <b>validationFunctions object</b> (in formValidation.js file), where <b>key = name of your input field</b> and <b>value = an array of validation rulls you want to run for the new input filed.</b></p>
<pre>	
  	<code>
  	&lt;!--Adding new input fields of "First Name" and "Last Name" to the validationFunctions object--&gt;
  	var&nbsp;<b>validationFunctions</b> = {

    . . .
    <b>firstName</b>: ['validateNotEmpty', 'validateMinLength', 'validateOnlyLetters'],
    <b>lastName</b> : ['validateNotEmpty', 'validateMinLength', 'validateOnlyLetters']
	};
  	
  	</code>
</pre>