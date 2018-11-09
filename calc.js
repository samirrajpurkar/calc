/*
 * Implement all your JavaScript in this file!
 */

accumulator = [ ]

 $('.number').click(function(e) {
  $('#display').val($('#display').val() + $(this).val());
 });

 $('#clearButton').click(function(e) {
  $('#display').val('');
 });

 $('#addButton').click(function(e) {
  accumulator.push($('#display').val());
  console.log(accumulator);
  $('#display').val('');
 });

 $('#equalsButton').click(function(e) {
  $('#display').val(parseInt(accumulator.pop()) + parseInt($('#display').val())); 
 });