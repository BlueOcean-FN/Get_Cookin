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
    glutenFree: false,
    fishFree: false,
    lowSodium: false,
    eggFree: false,
    alcoholFree: false,
    celeryFree: false,
    kosher: false,
    dash: false,
    immunoSupportive: false,
    ketoFriendly: false,
    kidneyFriendly: false,
    lowPotassium: false,
    mediterranean: false,
    mustardFree: false,
    paleo: false,
    pescatarian: false,
    redMeatFree: false,
    peanutFree: false,
    sesameFree: false,
    shellfishFree: false,
    sugarConscious: false,
    sulfiteFree: false,
    treeNutFree: false,
    wheatFree: false,
    exclusions: []
  });

  const handleCheckbox = (e) => {
    // console.log(e.target.id);
    const key = e.target.id;
    if(isChecked[e.target.id]) {
      setIsChecked({...isChecked, [key]: false});
    } else {
      setIsChecked({...isChecked, [key]: true})
    }
  };

  const addRestriction = (e) => {
    setIsChecked({...isChecked, exclusions: [...isChecked.exclusions, e.target[0].value]})
  }

  const addAutocompleteRestriction = (text) => {
    setIsChecked({...isChecked, exclusions: [...isChecked.exclusions, text]})
  }

  const removeRestriction = (e) => {
    console.log(e.target.textContent);
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
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    })
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
      console.log(response);
      const personalInfo = response.data.personalInfo;
      const checked = response.data.isChecked;
      setIsChecked(checked);
      setFirst(personalInfo.first);
      setLast(personalInfo.last);
      setEmail(personalInfo.email);
    })
  }, [loaded]);


  console.log(first, last, email)
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
  <input value="Glutten-free" id="glutenFree" type="checkbox" checked={isChecked.glutenFree} onChange={handleCheckbox}/>
  Glutten-free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Fish-Free" id="fishFree" type="checkbox" checked={isChecked.fishFree} onChange={handleCheckbox} />
  Fish-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value=" Low Sodium" id="lowSodium" type="checkbox" checked={isChecked.lowSodium} onChange={handleCheckbox} />
  Low Sodium&nbsp;&nbsp;
  </label>
  <label>
  <input value="Egg-Free" id="eggFree" type="checkbox" checked={isChecked.eggFree} onChange={handleCheckbox} />
  Egg_Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Alcohol-Free" id="alcoholFree" type="checkbox" checked={isChecked.alcoholFree} onChange={handleCheckbox} />
  Alcohol-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="celery-free" id="celeryFree" type="checkbox" checked={isChecked.celeryFree} onChange={handleCheckbox}/>
  Celery-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Kosher" id="kosher" type="checkbox" checked={isChecked.kosher} onChange={handleCheckbox} />
  Kosher&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="DASH" id="dash" type="checkbox" checked={isChecked.dash} onChange={handleCheckbox}/>
  DASH&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="immuno-supportive" id="immunoSupportive" type="checkbox" checked={isChecked.immunoSupportive} onChange={handleCheckbox} />
  Immuno- Supportive&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="keto-friendly" id="ketoFriendly" type="checkbox" checked={isChecked.ketoFriendly} onChange={handleCheckbox} />
  Keto-Friendly&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="low-potassium" id="lowPotassium" type="checkbox" checked={isChecked.lowPotassium} onChange={handleCheckbox} />
  Low Potassium&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Mediterranean" id="mediterranean" type="checkbox" checked={isChecked.mediterranean} onChange={handleCheckbox} />
  Mediterranean&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Mustard-free" id="mustardFree" type="checkbox" checked={isChecked.mustardFree} onChange={handleCheckbox} />
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
  <input value="red-meat-free" id="redMeatFree" type="checkbox" checked={isChecked.redMeatFree} onChange={handleCheckbox} />
  Red-Meat-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="penut-free" id="peanutFree" type="checkbox" checked={isChecked.peanutFree} onChange={handleCheckbox}  />
  Peanut-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="sesame-free" id="sesameFree" type="checkbox" checked={isChecked.sesameFree} onChange={handleCheckbox}  />
  Sesame-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="shellfish-free" type="checkbox"  id='shellFishFree' checked={isChecked.shellfishFree} onChange={handleCheckbox}  />
  Shellfish-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="sugar-conscious" id='sugarConscious'  type="checkbox" checked={isChecked.sugarConscious} onChange={handleCheckbox}  />
  Sugar-Conscious&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="sulfite-free" type="checkbox" id='sulphiteFree'  checked={isChecked.sulfiteFree} onChange={handleCheckbox} />
  Sulphite-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="tree-nut-free" id='treeNutFree' type="checkbox" checked={isChecked.treeNutFree} onChange={handleCheckbox}  />
  Tree-Nut-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="wheat-free" id='wheatFree' type="checkbox" checked={isChecked.wheatFree} onChange={handleCheckbox} />
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