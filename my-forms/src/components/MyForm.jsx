import {useState, useEffect} from 'react';

const MyForm = ({}) => {
    const initial = {name:'', email:'', phone:'', phoneType:'', staff:'', bio:'', notify: false }
    const [person, setPerson] = useState(initial);

    const handleChangeCreator = attribute => {
    
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



    const validatePhone = () => {
      const phoneRegex = /^(1-)?\d{3}-\d{3}-\d{4}$/
      if (person.phone !== '' && !phoneRegex.test(person.phone)) {
        alert ("Please format phone number with dashes");
      }
    }
  
    const validateBio = () => {
      if(person.bio.length > 280) {
        alert ("Bio text must be less than 280 characters");
      }
    }

    const onSubmit = (e) =>{
       e.preventDefault()
       validateName();
       validateEmail();
       validatePhone();
       validateBio();
       console.log(person)
       setPerson(initial);
       
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
             {  person.phone !== ""? 
                <div>
                <label htmlFor="phone-type">Phone Type:</label>
                <select id="phoneType" onChange={handleChangeCreator('phoneType')}>
                      <option disabled default value="" >Select Phone Type</option>
                      <option value="home">home</option>
                      <option value="work">work</option>
                      <option value="mobile">mobile</option>
                </select>
                </div> : <div></div>
            
            }
            
         
            <label htmlFor="instructor">Instructor:</label>
            <input id="instructor" type="radio" value="instructor" name="staff" onChange={handleChangeCreator('staff')}/>
            <label htmlFor="student">Student:</label>
            <input id="student" type="radio" value="student" name="staff" onChange={handleChangeCreator('staff')}/>
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" name="bio" value={person.bio} onChange={handleChangeCreator('bio')}></textarea>
            <label htmlFor="notify">Sign up for email:</label>
            <input id="notify" type="checkbox" name="notify" value='true' onChange={handleChangeCreator('notify')}/>
        
            <input type="submit" value="Register"/>

          </form>
        </>
    )
}

export default MyForm