para = $( "p" );
para
  .prop( "luggageCode", 1234 )
  .append( "The secret luggage code is: ", String( para.prop( "luggageCode" ) ), ". " )
  .removeProp( "luggageCode" )
  .append( "Now the secret luggage code is: ", String( para.prop( "luggageCode" ) ), ". " );