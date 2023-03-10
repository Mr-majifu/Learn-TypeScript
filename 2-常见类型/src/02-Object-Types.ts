
{
  function user(user:{name:string,age:number}):string {
    return 'my name is '+ user.name + ', i am '+user.age+' years old'
  }
  user({name:'chenzihao',age:12})
}