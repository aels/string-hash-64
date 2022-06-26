hash = function(s) { return[5381,52711].map(function(a,j,i){i=s.length;while(i--)a=a*33^s.charCodeAt(i);return(a>>>0)*(j||4094)}).join([]) };
