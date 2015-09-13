# Simple_JS_Form_Validation

<p>HTML structure for an input field can look something as below. The only required element for HTML structure is an empty <b>&lt;div&gt;&lt;/div&gt;</b> after each input field. This is where the validation message appears if the validation failed.</p>
<p>And don't forget to add <b>&lt;data="easyValidation"&gt;</b> to each of your input fields.</p>

<h3>HTML</h3>
<pre>	
  	<code>
  	&lt;!-- Input field for First Name --&gt;
  		&lt;label for="name"&gt;First Name:&lt;/label&gt;
  		&lt;input type="text" class="form-control" name="firstName" data="easyValidation" required&gt;
  		&lt;div&gt;&lt;/div&gt;

	&lt;!-- Input field for Last Name -->
  		&lt;label for="email">Last Name:&lt;/label&gt;
  		&lt;input type="text" class="form-control" name="lastName" data="easyValidation" required&gt;
  		&lt;div&gt;&lt;/div&gt;
  	</code>
</pre>


<p>To make validation event more obvious, Easy-JS-Form-Validation adds <b>.js-validation-msg</b> class to the empty &lt;div&gt;&lt;/div&gt; with validation message. You can use default Easy-JS-Form-Validation CSS styles for this class or write your own.</p>

<h3>CSS</h3>
<pre>	
  	<code>
  	&lt;!--Styling validation message--&gt;
  	.js-validation-msg {
		padding</span>: 1rem;
		background-color: #c7254e;
		color: #fff;
  	</code>
</pre>