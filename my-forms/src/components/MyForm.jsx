import {useState, useEffect} from 'react';

const MyForm = ({}) => {
    const [person, setPerson] = useState({name:'', email:'', phone:'', phoneType:'', staff:'', bio:'', notify: false });
    
    return (
        <>
        <form>
          <label htmlFor="name">Name:</label>
          <input id="name" value={person.name} onChange={()=>{}}/>
          <label htmlFor="email">Email:</label>
          <input id="email" value={person.email} onChange={()=>{}}/>
          <label htmlFor="phone">Phone:</label>
          <input id="phone" value={person.phone} onChange={()=>{}}/>
          <label htmlFor="phone-type">Phone Type:</label>
          <select id="phoneType" onChange={()=>{}}>
                <option disabled default value="" >Select Phone Type</option>
                <option value="home">home</option>
                <option value="work">work</option>
                <option value="mobile">mobile</option>
          </select>
          <label htmlFor="instructor">Instructor:</label>
          <input id="instructor" type="radio" value="instructor" name="staff"/>
          <label htmlFor="student">Student:</label>
          <input id="student" type="radio" value="student" name="staff"/>
          <label htmlFor="bio">Bio:</label>
          <textarea id="bio" name="bio"></textarea>
          <label htmlFor="notify">Sign up for email:</label>
          <input id="notify" type="checkbox" name="notify" value='true'/>
       



          <input type="submit" value="Register"/>

        </form>
        
        </>
    )
}

export default MyForm