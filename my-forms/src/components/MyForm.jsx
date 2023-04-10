import {useState, useEffect} from 'react';

const MyForm = ({}) => {
    const [person, setPerson] = useState({name:'', email:'', phone:'', phoneType:'', staff:'', bio:'', notify: false });

    const handleChangeCreator = attribute => {
      console.log([attribute], 'mmmmmm');
      return e => {
            
        setPerson(prev => ({...prev, [attribute]: e.target.value}));
      
      };
    };

    const validateName = ()=> {
      if (person.name === ''){
       alert(' Please type in a name');
      }
    }


    const validateEmail=() => {
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(person.email)){
          alert("Please put in valid email")
       }
    }

    const onSubmit = (e) =>{
       e.preventDefault()
       validateName();
       validateEmail();
       console.log(person)
    }

    return (
        <>
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name" value={person.name} onChange={handleChangeCreator('name')}/>
            <label htmlFor="email">Email:</label>
            <input id="email" value={person.email} onChange={handleChangeCreator('email')}/>
            <label htmlFor="phone">Phone:</label>
            <input id="phone" value={person.phone} onChange={handleChangeCreator('phone')}/>
            <label htmlFor="phone-type">Phone Type:</label>
            <select id="phoneType" onChange={handleChangeCreator('phoneType')}>
                  <option disabled default value="" >Select Phone Type</option>
                  <option value="home">home</option>
                  <option value="work">work</option>
                  <option value="mobile">mobile</option>
            </select>
            <label htmlFor="instructor">Instructor:</label>
            <input id="instructor" type="radio" value="instructor" name="staff" onChange={handleChangeCreator('staff')}/>
            <label htmlFor="student">Student:</label>
            <input id="student" type="radio" value="student" name="staff" onChange={handleChangeCreator('staff')}/>
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" name="bio" onChange={handleChangeCreator('bio')}></textarea>
            <label htmlFor="notify">Sign up for email:</label>
            <input id="notify" type="checkbox" name="notify" value='true' onChange={handleChangeCreator('notify')}/>
        
            <input type="submit" value="Register"/>

          </form>
        </>
    )
}

export default MyForm