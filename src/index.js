import React from 'react';
import ReactDOM from 'react-dom';
import ReviewUser from './Components/ReviewUserComponent/ReviewUser.component';
import './Fontawesomeicons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Student from './Components/Student.component.jsx';
//import Teacher from './Components/Teacher.comonent.jsx';

ReactDOM.render(
  <React.StrictMode>
    {
      //<Student rollno='20' /><Teacher prop1='English'/>
    }
    <ReviewUser
      name='Akash'
      email='aksh546@gmail.com'
      image='https://i.pravatar.cc/150?u=fake@pravatar.com'
      review='lorem isd hfdhfie dfdkfjduf fkdfhdkf skddfdskfjksdjf sfkdsjfks
     djfhkjdfhkdjk fdjkghfkgf djhfur kjrijfghfght'
      rating="*****"
        // eslint-disable-next-line react/jsx-no-duplicate-props
        
      
      
    />
    <ReviewUser
      name='Anisha'
      email='anisha8057@gmail.com'
      image='https://i.pravatar.cc/150?u=a042581f4e29026704d'
      review='lorem isd hff fkdfhdkf skddfdskfjksdjf sfkdsjfks
     djfhkjdfhkdjk fdjkghfkgf jfdhgrg dfjghduteri djhfur kjrijfghfght'
      rating={<FontAwesomeIcon icon="star"/>}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      
    />
    <ReviewUser
      name='Samar'
      email='sam_dt57@gmail.com'
      image='https://cdn.pixabay.com/photo/2018/05/22/14/00/girl-3421489_960_720.jpg'
      review='lorem isd hfdhfie dfdkfjduf fkdfhdkf skddfdskfjksdjf sfkdsjfks
     djfhkjdfhkdjk fdjkgh dfjghduteri djhfur kjrijfghfght'
      rating="****"
    />
  </React.StrictMode>,
  document.getElementById('root')
);
