/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=e5a55671d738bc9cdca5)
 * Config saved to config.json and https://gist.github.com/e5a55671d738bc9cdca5
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i=n&&t(n);return i&&i.length?i:e.parent()}function n(n){n&&3===n.which||(t(a).remove(),t(o).each(function(){var i=t(this),a=e(i),o={relatedTarget:this};a.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&t.contains(a[0],n.target)||(a.trigger(n=t.Event("hide.bs.dropdown",o)),n.isDefaultPrevented()||(i.attr("aria-expanded","false"),a.removeClass("open").trigger("hidden.bs.dropdown",o))))}))}function i(e){return this.each(function(){var n=t(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new r(this)),"string"==typeof e&&i[e].call(n)})}var a=".dropdown-backdrop",o='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle)};r.VERSION="3.3.5",r.prototype.toggle=function(i){var a=t(this);if(!a.is(".disabled, :disabled")){var o=e(a),r=o.hasClass("open");if(n(),!r){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",n);var s={relatedTarget:this};if(o.trigger(i=t.Event("show.bs.dropdown",s)),i.isDefaultPrevented())return;a.trigger("focus").attr("aria-expanded","true"),o.toggleClass("open").trigger("shown.bs.dropdown",s)}return!1}},r.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var i=t(this);if(n.preventDefault(),n.stopPropagation(),!i.is(".disabled, :disabled")){var a=e(i),r=a.hasClass("open");if(!r&&27!=n.which||r&&27==n.which)return 27==n.which&&a.find(o).trigger("focus"),i.trigger("click");var s=" li:not(.disabled):visible a",l=a.find(".dropdown-menu"+s);if(l.length){var d=l.index(n.target);38==n.which&&d>0&&d--,40==n.which&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};var s=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=s,this},t(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",o,r.prototype.toggle).on("keydown.bs.dropdown.data-api",o,r.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",r.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e){var n,i=e.attr("data-target")||(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return t(i)}function n(e){return this.each(function(){var n=t(this),a=n.data("bs.collapse"),o=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);!a&&o.toggle&&/show|hide/.test(e)&&(o.toggle=!1),a||n.data("bs.collapse",a=new i(this,o)),"string"==typeof e&&a[e]()})}var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.5",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,a=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(a&&a.length&&(e=a.data("bs.collapse"),e&&e.transitioning))){var o=t.Event("show.bs.collapse");if(this.$element.trigger(o),!o.isDefaultPrevented()){a&&a.length&&(n.call(a,"hide"),e||a.data("bs.collapse",null));var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return s.call(this);var l=t.camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var a=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[n](0).one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(i.TRANSITION_DURATION):a.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(n,i){var a=t(i);this.addAriaAndCollapsedClass(e(a),a)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var a=t.fn.collapse;t.fn.collapse=n,t.fn.collapse.Constructor=i,t.fn.collapse.noConflict=function(){return t.fn.collapse=a,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var a=t(this);a.attr("data-target")||i.preventDefault();var o=e(a),r=o.data("bs.collapse"),s=r?"toggle":a.data();n.call(o,s)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one("bsTransitionEnd",function(){n=!0});var a=function(){n||t(i).trigger(t.support.transition.end)};return setTimeout(a,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
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
    $('input[name='+field_name+']').toggleClass('alert-danger', false);

    // To hide the error message
    $('input[name='+field_name+']').next().toggleClass('js-validation-msg', false);
    $('input[name='+field_name+']').next().html('');
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

$(function() {
  
    $('a[href*=#]:not([href=#])').click(function()
    {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
        {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length)
            {
                $('html,body').animate({
                scrollTop: target.offset().top - 100}, 1000);
            
                return false;
            }
        }
    });

});