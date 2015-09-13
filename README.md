# Simple_JS_Form_Validation

<p>HTML structure for an input field can look something as below. The only required element for HTML structure is an empty <b>&lt;div&gt;&lt;/div&gt;</b> after each input field. This is where the validation message appears if the validation failed.</p>
<p>And don't forget to add <b>&lt;data="easyValidation"&gt;</b> to each of your input fields.</p>

<h3>HTML</h3>
						<pre class="code text-left">	
  							<code><span class="code-grey">/*&nbsp;Input field for First Name&nbsp;*/</span>
  							&lt;<span class="code-pink">label</span> <span class="code-green">for</span>=<span class="code-yellow">"name"</span>&gt;First Name:&lt;/<span class="code-pink">label</span>&gt;
  							&lt;<span class="code-pink">input</span> <span class="code-green">type</span>=<span class="code-yellow">"text"</span> <span class="code-green">class</span>=<span class="code-yellow">"form-control"</span> <span class="code-green">name</span>=<span class="code-yellow">"firstName"</span> <span class="code-green">data</span>=<span class="code-yellow">"easyValidation"</span> <span class="code-green">required</span>&gt;
  						  		&lt;<span class="code-pink">div</span>&gt;&lt;/<span class="code-pink">div</span>&gt;<span class="code-grey">&nbsp;/*&nbsp;&lt;--validation message for incorrect First Name input will appear here&nbsp;*/</span>

							
							<span class="code-grey">/*&nbsp;Input field for Last Name&nbsp;*/</span>
  						  		&lt;<span class="code-pink">label</span> <span class="code-green">for</span>=<span class="code-yellow">"name"</span>&gt;Last Name:&lt;/<span class="code-pink">label</span>&gt;
  						  		&lt;<span class="code-pink">input</span> <span class="code-green">type</span>=<span class="code-yellow">"text"</span> <span class="code-green">class</span>=<span class="code-yellow">"form-control"</span> <span class="code-green">name</span>=<span class="code-yellow">"lastName"</span> <span class="code-green">data</span>=<span class="code-yellow">"easyValidation"</span> <span class="code-green">required</span>&gt;
  						  		&lt;<span class="code-pink">div</span>&gt;&lt;/<span class="code-pink">div</span>&gt;<span class="code-grey">&nbsp;/*&nbsp;&lt;--validation message for incorrect Last Name input will appear here&nbsp;*/</span>
  							</code>
						</pre>