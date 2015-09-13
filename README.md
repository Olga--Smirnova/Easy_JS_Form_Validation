# Simple_JS_Form_Validation

<p>HTML structure for an input field can look something as below. The only required element for HTML structure is an empty <b>&lt;div&gt;&lt;/div&gt;</b> after each input field. This is where the validation message appears if the validation failed.</p>
<p>And don't forget to add <b>&lt;data="easyValidation"&gt;</b> to each of your input fields.</p>

<h3>HTML</h3>

<pre class="code text-left">	
  	<code>
  	<!-- Input field for First Name -->
  		&lt;label for="name"&gt;First Name:&lt;/label&gt;
  		<input type="text" class="form-control" name="firstName" data="easyValidation" required>
  		<div></div>

	<!-- Input field for Last Name -->
  		<label for="email">Last Name:</label>
  		<input type="text" class="form-control" name="lastName" data="easyValidation" required>
  		<div></div>
  	</code>
</pre>