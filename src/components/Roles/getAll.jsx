import axios from 'axios';
import React from 'react';
import { Role } from '../../Models/Role';

export default class GetAllRoles extends React.Component{
  state = {
    allRoles:[]
  }
  async getAll(){
    let result = {};
    await axios.get('https://foodmartapi-1646848624483.azurewebsites.net/roles')
    .then(res => {
      result = res.data;
      this.setState({
        allRoles:result
      })
    });
  }
  componentDidMount() {
    
    this.getAll();
      
      let allRoles = this.state.allRoles.map(r => {
        return <Role
          key={r.id}
          id={r.id}
          description={r.description}
        />
      });
      this.setState({allRoles: allRoles});
  }
  render(){
    let pathname = window.location.pathname;
  if (localStorage.getItem('username') === null) {
    pathname = '/Login'
    window.location.pathname = pathname;
  }
    let allRoles = this.state.allRoles.map(r => {
      return <Role
        key={r.id}
        id={r.id}
        description={r.description}
      />
    });
    return(
      
     <div>
       <h1> All Roles </h1>
    
       
      <table>
      <thead>
        <tr><th>id</th><th>description</th></tr>
      </thead>
      <tbody>
        {allRoles}
      </tbody>

    </table> 
    </div>
    )
  }
}
// const [all, setAll] = useState();
// function 
// export default function GetAllRoles() {
  
//   const getAll = async () => {
//     let respo = await axios.get('http://localhost:8080/roles');
//     let data = await respo.data;
//     console.log(data);
    
//     setAll(allRoles);
//   }
 
//   return (
//   <div>
//     <table>
//       <thead>
//         <tr><th>id</th><th>description</th></tr>
//       </thead>
//       <tbody>
//         {all}
//       </tbody>


//     </table> 

//   </div>);
// }
