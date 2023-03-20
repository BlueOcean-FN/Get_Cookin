import React, { useState, useEffect } from "react";
import MoreDietaryRes from './MoreDietRes.jsx';
import './DietaryRestrictions.css';
import Filters from '../../Components/Filters/Filters.jsx';
import axios from 'axios';
//import { decode } from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import AccountInfo from './AccountInfo.jsx';


const DietaryRestrictions = ({loaded}) => {
  const [ first, setFirst ] = useState('');
  const [ last, setLast ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ isChecked, setIsChecked ] = useState({
    vegan: false,
    vegetarian: false,
    lowCarb: false,
    'gluten-free': false,
    'fish-free': false,
    lowSodium: false,
    'egg-free': false,
    'alcohol-free': false,
    'celery-free': false,
    kosher: false,
    'DASH': false,
    'immuno-supportive': false,
    'keto-friendly': false,
    'kidney-friendly': false,
    'low-potassium': false,
    'Mediterranean': false,
    'mustard-free': false,
    paleo: false,
    pescatarian: false,
    'red-meat-free': false,
    'peanut-free': false,
    'sesame-free': false,
    'shellfish-free': false,
    'sugar-conscious': false,
    'sulfite-free': false,
    'tree-nut-free': false,
    'wheat-free': false,
    exclusions: []
  });

  const handleCheckbox = (e) => {
    const key = e.target.id;
    if(isChecked[e.target.id]) {
      setIsChecked({...isChecked, [key]: false});
    } else {
      setIsChecked({...isChecked, [key]: true})
    }
  };

  const addRestriction = (e) => {
    e.preventDefault();
    setIsChecked({...isChecked, exclusions: [...isChecked.exclusions, e.target[0].value]})
  }

  const addAutocompleteRestriction = (text) => {
    setIsChecked({...isChecked, exclusions: [...isChecked.exclusions, text]})
  }

  const removeRestriction = (e) => {
    const newExclusions = isChecked.exclusions.filter(exclusion => {
      return `${exclusion} \u2716` !== e.target.textContent;
    })
    setIsChecked({...isChecked, exclusions: newExclusions})
  }

  const saveToProfile = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const decode = jwtDecode(token);
    axios.post('http://localhost:3000/savetoprofile',{
      headers: {
        authorization: token
      },
      params: {
        user_id: decode.id,
        settings: isChecked
      }
    })
    .then(result => { })
    .catch(err => { })
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    const decode = jwtDecode(token);
    axios.get('http://localhost:3000/getprofile', {
      headers: {
        authorization: token
      },
      params: {
        user_id: decode.id,
      }
    }).then ((response) => {
      const personalInfo = response.data.personalInfo;
      const checked = response.data.isChecked;
      setIsChecked(checked);
      setFirst(personalInfo.first);
      setLast(personalInfo.last);
      setEmail(personalInfo.email);
    })
  }, [loaded]);

  return (
    <div>
  <div class="dietaryRestrictions">
  <h3>Dietary Restrictions</h3>
  <div className='dietary-selection-container'>
  <label>
  <input value="Vegan" id="vegan" type="checkbox" checked={isChecked.vegan} onChange={handleCheckbox}  />
  Vegan&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Vegetarian" id="vegetarian" type="checkbox" checked={isChecked.vegetarian} onChange={handleCheckbox} />
  Vegetarian&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Low Carb" id="lowCarb" type="checkbox" checked={isChecked.lowCarb} onChange={handleCheckbox} />
  Low Carb&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Glutten-free" id="gluten-free" type="checkbox" checked={isChecked['gluten-free']} onChange={handleCheckbox}/>
  Glutten-free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Fish-Free" id="fish-free'" type="checkbox" checked={isChecked['fish-free']} onChange={handleCheckbox} />
  Fish-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value=" Low Sodium" id="lowSodium" type="checkbox" checked={isChecked['low-sodium']} onChange={handleCheckbox} />
  Low Sodium&nbsp;&nbsp;
  </label>
  <label>
  <input value="Egg-Free" id="egg-free" type="checkbox" checked={isChecked['egg-free']} onChange={handleCheckbox} />
  Egg_Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Alcohol-Free" id="alcohol-free" type="checkbox" checked={isChecked['alcohol-free']} onChange={handleCheckbox} />
  Alcohol-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="celery-free" id="celery-free" type="checkbox" checked={isChecked['celery-free']} onChange={handleCheckbox}/>
  Celery-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Kosher" id="kosher" type="checkbox" checked={isChecked.kosher} onChange={handleCheckbox} />
  Kosher&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="DASH" id="DASH" type="checkbox" checked={isChecked['DASH']} onChange={handleCheckbox}/>
  DASH&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="immuno-supportive" id="immuno-supportive" type="checkbox" checked={isChecked['immuno-supportive']} onChange={handleCheckbox} />
  Immuno- Supportive&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="keto-friendly" id="keto-friendly" type="checkbox" checked={isChecked['keto-friendly']} onChange={handleCheckbox} />
  Keto-Friendly&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="low-potassium" id="low-potassium" type="checkbox" checked={isChecked['low-potassium']} onChange={handleCheckbox} />
  Low Potassium&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Mediterranean" id="mediterranean" type="checkbox" checked={isChecked.mediterranean} onChange={handleCheckbox} />
  Mediterranean&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Mustard-free" id="mustard-free" type="checkbox" checked={isChecked['mustard-free']} onChange={handleCheckbox} />
  Mustard-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="paleo" id="paleo" type="checkbox" checked={isChecked.paleo} onChange={handleCheckbox} />
  Paleo&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="pecatarian" id="pescatarian" type="checkbox" checked={isChecked.pescatarian} onChange={handleCheckbox} />
  Pescatarian&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="red-meat-free" id="red-meat-free" type="checkbox" checked={isChecked['red-meat-free']} onChange={handleCheckbox} />
  Red-Meat-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="penut-free" id="peanut-free" type="checkbox" checked={isChecked['peanut-free']} onChange={handleCheckbox}  />
  Peanut-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="sesame-free" id="sesame-free" type="checkbox" checked={isChecked['sesame-free']} onChange={handleCheckbox}  />
  Sesame-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="shellfish-free" type="checkbox"  id='shellfish-free' checked={isChecked['shellfish-free']} onChange={handleCheckbox}  />
  Shellfish-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="sugar-conscious" id='sugar-conscious'  type="checkbox" checked={isChecked['sugar-conscious']} onChange={handleCheckbox}  />
  Sugar-Conscious&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="sulfite-free" type="checkbox" id='sulphite-free'  checked={isChecked['sulfite-free']} onChange={handleCheckbox} />
  Sulphite-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="tree-nut-free" id='tree-nut-free' type="checkbox" checked={isChecked['tree-nut-free']} onChange={handleCheckbox}  />
  Tree-Nut-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="wheat-free" id='wheat-free' type="checkbox" checked={isChecked['wheat-free']} onChange={handleCheckbox} />
  Wheat-Free&nbsp;&nbsp;&nbsp;
  </label>
    </div>
    <MoreDietaryRes ingredients={isChecked.exclusions}
                    addRestriction={addRestriction}
                    removeRestriction={removeRestriction}
                    addAutocompleteRestriction={addAutocompleteRestriction}/>
    <form onSubmit={saveToProfile}>
        <button>Save to Profile</button>
    </form>

  </div>
  <div>
      <AccountInfo first={first} last={last} email={email}/>
    </div>
  </div>

  )
}
export default DietaryRestrictions;