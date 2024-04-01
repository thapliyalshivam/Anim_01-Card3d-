

export function interpolate(a,b,c,d,value){
 return c + (d-c)/(b-a)*value;
}