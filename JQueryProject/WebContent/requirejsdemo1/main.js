/**
 * 
 */
requirejs.config({
    baseUrl : 'modules/',
    bundles: {
        'modules': ['module_one', 'module_two']
    }
})

require(['module_one', 'module_two'], function(moduleOne, moduleTwo){
    alert(moduleOne);
    alert(moduleTwo);
})