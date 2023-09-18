//JSON (Used to Exchange Data in Server)

obj={name:"Prashant",length:1}
json=JSON.stringify(obj);//Object convert into to string
//(Through String it is easy to transfer data  ) 
console.log(json);
console.log(typeof json);
console.log(typeof obj);

parsed = JSON.parse('{"name":"Prashant","length":1,"a":{"this":"that"}}')
console.log(parsed);

