 const Shorten=(item)=>{
const value=item.split(" ")
const value1=`${value[0]} ${value[1]}`;
return value1;
}

const Findstate=(state,id)=>{
const bool=state.selectItems.some(x=>x.id===id);
const find=state.selectItems.findIndex(x=>x.id===id);
if(find>=0)
{var number=state.selectItems[find].numberofproduct;}

return {bool:bool,number:number};
}
 export {Shorten,Findstate};