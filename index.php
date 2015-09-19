<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en" class="no-js"> <!--<![endif]-->
<head>
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	<meta name="descripion" content="Easy JS Form Validation - simple and reusable code to validate your form fields on client side.">
	<meta name="keywords" content="Easy JS Form Validation, reusable Javascript form validation, jQuery form validation, client side form validation"/>
	<meta charset="utf-8" />

	<title>Easy JS Form Validation</title>
	
	<link href="dist/assets/css/styles.min.css" rel="stylesheet" type="text/css">

</head>


<body>
<!--================== Backups =================================================-->
<!--[if lte IE 9]>
	<div class="message" id="oldie">
		<p><i class="fa fa-exclamation-circle"></i>Sorry, but this website does not support IE9 or lower. Please <a href="http://windows.microsoft.com/ie">upgrade your IE</a> or <a href="http://www.browsehappy.com">switch to another browser</a>.</p>
	</div>
<![endif]-->

<!-- Opera Mini backup -->
	<div style="display:none;" class="message" id="operamini">
		<p><i class="fa fa-exclamation-circle"></i>Sorry, but this website does not support Opera Mini. Please switch to another browser such as Opera for Android, Chrome, Firefox, or Safari.</p>
	</div>

<!-- no JS backup -->
	<noscript>
	    <div class="message" id="nojs">
	    	<p class="text-center"><i class="fa fa-exclamation-circle"></i> Sorry, but you need JavaScript to enjoy full experience from this page. Please, enable JavaScript in your browser or switch to a JavaScript device.</p>
	    </div>
	</noscript>



<!--================== Header =================================================-->
	<header>

		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container">
				<div class="row-fluid clearfix">
		
				<!-- Logo -->
					<a class="navbar-brand" href="#" title="Easy JS Form Validation">
						<img width="80" height="70" class="hidden-xs" id="logo">
						<p class="inline-me">Easy-JS-Form-Validation</p>
					</a>
					
		    	<!-- Hamburger_btn for mobile -->
           		   	<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNav">
           		   		<i class="fa fa-bars"></i>
           		   	</button>
		
           		   	<div class="collapse navbar-collapse" id="mainNav" role="navigation">  
            	     	<ul class="nav navbar-nav navbar-right">
            	     		<li><a href="#demo" class="uppercase">Demo</a></li>
            	     		<li><a href="#getItNow" class="uppercase">Get-It-Now</a></li>
            	     		<li><a href="#howItWorks" class="uppercase">How-It-Works</a></li>
            	      	</ul>
            	    </div>
            	   </div>
            		
			</div>
		</nav>

    </header> <!-- header ends -->



<!--================== Main =================================================-->
		<div class="container-fluid">

			<main class="row">
				
			<!-- Demo -->	
				<section id="demo">
					<h1 class="text-center">Demo</h1>

					<form class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-4 col-md-offset-4 m-tb-1-3">
						<div class="form-group">
  						  	<label for="name">Name:</label>
  						  	<input type="text" class="form-control" name="name" data="easyValidation" required>
  						  	<div></div>
  						</div>

  						<div class="form-group">
  						  	<label for="email">Email:</label>
  						  	<input type="email" class="form-control" name="email" data="easyValidation" required>
  						  	<div></div>
  						</div>

  						<div class="form-group">
  						  	<label for="url">Url:</label>
  						  	<input type="text" class="form-control" name="url" data="easyValidation" required>
  						  	<div></div>
  						</div>

  						<div class="form-group">
  						  	<label for="phone">Phone:</label>
  						  	<input type="text" class="form-control" name="phone" data="easyValidation" required>
  						  	<div></div>
  						</div>

  						<div class="checkbox">
  						  	<label for="checkbox"></label>
  						    	<input type="checkbox" name="checkbox" data="easyValidation" required> Checkbox
  						  	<div></div>
  						</div>

  						<div class="form-group">
  						  	<label for="comment">Textarea:</label>
  						  	<textarea type="text" class="form-control" name="comment" data="easyValidation" rows="4" required></textarea>
  						  	<div></div>
  						</div>

  						<button type="submit" class="third-button">Send</button>
					</form>
					
				</section>

			<!-- Get-it-now -->	
				<section class="col-xs-12 bg-dark" id="getItNow">
					<h1 class="text-center text-white">Get It Now</h1>
					
					<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-8 col-lg-offset-2 text-center">
						<p class="intro text-white">Simple client side validation for your form which is really easy to use and re-use.
						<br>
						Please check <a href="#howItWorks" class="inline-me"><b>HOW-IT-WORKS</b></a> section for a couple of steps to make it all work. jQuery is required.
						</p>
					</div>

					<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 text-center m-tb-1-3">
						<a href="https://github.com/Olga--Smirnova/Easy_JS_Form_Validation" class="main-button inline-me" title="View on GitHub">View on GitHub</a>

						<a href="http://localhost/Easy_JS_Form_Validation/easy-js-form-validation.zip" class="sec-button inline-me">Download</a>
					</div>
				</section>

			<!-- How-it-works -->	
				<section class="col-xs-12" id="howItWorks">
					<h1 class="text-center">How It Works</h1>

					<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 text-center m-tb-1-3">
					<!-- HTML instructions -->		
						<p class="text-left">Download <span class="pack-name">Easy-JS-Form-Validation</span> files and don't forget to add links with correct paths to those files on you page. HTML structure for an input field can look something as below. The only required element for HTML structure is an empty <b>&lt;div&gt;&lt;/div&gt;</b> after each input field. This is where the validation message appears if the validation failed. And don't forget to add <b>&lt;data="easyValidation"&gt;</b> to each of your input fields.</p>
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

					<!-- CSS instructions -->
						<p class="text-left explanation">To make validation event more obvious, <span class="pack-name">Easy-JS-Form-Validation</span> adds <b>.js-validation-msg</b> class to the empty <b>&lt;div&gt;&lt;/div&gt;</b> with validation message. You can use default <span class="pack-name">Easy-JS-Form-Validation</span> CSS styles for this class or write your own.</p>

						<h3>CSS</h3>
						<pre class="code text-left">	
  							<code><span class="code-grey">/*&nbsp;Styling validation message&nbsp;*/</span>
  							<span class="code-green">.js-validation-msg</span> {
	<span class="code-blue">padding</span>: <span class="code-violet">1</span><span class="code-pink">rem</span>;
	<span class="code-blue">background-color</span>: <span class="code-violet">#c7254e</span>;
	<span class="code-blue">color</span>: <span class="code-violet">#fff</span>;
}
  							</code>
  							<code><span class="code-grey">/*&nbsp;Styling input field, that didn't pass the validation; you can use the Bootstrap one (as in example) or write your own&nbsp;*/</span>
  							<span class="code-green">.alert-danger</span> {
    <span class="code-blue">color</span>: <span class="code-violet">#a94442</span>;
    <span class="code-blue">background-color</span>: <span class="code-violet">#f2dede</span>;
    <span class="code-blue">border-color</span>: <span class="code-violet">#ebccd1</span>;
}
  							</code>
						</pre>

					<!-- JS instructions -->
						<p class="text-left explanation">jQuery is required.

						<br><br>

						You can easily alter the text of validation messages, add and remove additional input fields according to your needs.

						<br><br>
						
						<i class="fa fa-exclamation-circle"></i><b>NOTE:</b>
						
						<br>
						in order to add new input field to <span class="pack-name">Easy-JS-Form-Validation</span>, you need to add new <b>key-value pair</b> into <b>validationFunctions object</b>(in formValidation.js file), where <b>key = name of your input field</b> and <b>value = an array of validation rulls you want to run for the new input filed.</b></p>
						
						<h3>JavaScript</h3>
						<pre class="code text-left">	
  							<code><span class="code-grey">/*&nbsp;Adding new input fields of "First Name" and "Last Name" to the validationFunctions object&nbsp;*/</span>
  							<span class="code-blue">var</span>&nbsp;validationFunctions <span class="pink">=</span> {

    . . .
    firstName: ['<span class="code-yellow">validateNotEmpty</span>', '<span class="code-yellow">validateMinLength</span>', '<span class="code-yellow">validateOnlyLetters</span>'],
    lastName : ['<span class="code-yellow">validateNotEmpty</span>', '<span class="code-yellow">validateMinLength</span>', '<span class="code-yellow">validateOnlyLetters</span>']
};
  							</code>
						</pre>
					</div>
				</section>
				
			</main>

		</div>



<!--================== Footer =================================================-->
		<footer class="text-center" role="contentinfo">
			<p class="text-white">&copy; <?php date_default_timezone_set('Pacific/Auckland'); echo date('F Y'); ?> - September 2015
				<a href="http://olgasmirnova.co.nz/" title="Olga Smirnova" class="inline-me">Olga Smirnova</a>
			</p>
		</footer>


		
	
<!-- jQuery -->	
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="dist/assets/js/main.js"></script>

</body>

</html>