type Handle =()=> Promise<string>
const fullname = 'Duong Dinh Khanh'
const handle: Handle = ()=> Promise.resolve(fullname)
 // console.log(fullname)
handle().then(console.log)