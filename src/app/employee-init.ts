export class Init {
  load() {
    if(localStorage.getItem('employees') === null || localStorage.getItem('employees') == undefined) {
      console.log('No employees Found... Creating...');
      let emps = [
        {
          id:1,
          firstName:'Prashant',
          lastName:'Panigrahi',
          number: '9590858606098'
        },
        {
          id:2,
          firstName:'Abhishek',
          lastName:'Singh',
          number: '9697077970'
        }, {
          id:3,
          firstName:'Akshay',
          lastName:'Rathod',
          number:'988067970'
        },
      ];

      localStorage.setItem('employees', JSON.stringify(emps));
      return
    } else {
      console.log('Found employees...');
    }
  }
}
