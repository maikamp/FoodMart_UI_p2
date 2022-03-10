import axios from 'axios';
import React from 'react';
import { Role } from '../../Models/Role';
<<<<<<< HEAD
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
      <table>
      <thead>
        <tr><th>id</th><th>description</th></tr>
      </thead>
      <tbody>
        {allRoles}
      </tbody>
=======
export default function GetAllRoles() {
    const [all, setAll] = useState();
    const getAll = async () => {
        let respo = await axios.get('http://localhost:8080/roles');
        let data = await respo.data;
        console.log(data);
        let allRoles = data.map(r => {
            return <Role
                key={r.id}
                id={r.id}
                description={r.description}
            />
        });
        setAll(allRoles);
    }
    

    return <div>
        <button onClick={getAll}>get all roles</button>
        <table>
            <thead>
                <tr><th>id</th><th>description</th></tr>
            </thead>
            <tbody>
                {all}
            </tbody>
>>>>>>> 93afb5f5a45ed660bcf1de71ef09e0f5232d4fcb


    </table> 
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
