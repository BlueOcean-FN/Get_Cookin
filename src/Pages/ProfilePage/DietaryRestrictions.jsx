import React, { useState} from "react";
import MoreDietaryRes from './MoreDietRes.jsx';
import './DietaryRestrictions.css';
import Filters from '../../Components/Filters/Filters.jsx';

const DietaryRestrictions = () => {
  const [ isChecked, setIsChecked ] = useState([]);

  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    if(checked) {
      setIsChecked([value]);
    }
  }

  return (
  <div class="dietaryRestrictions">
  <h3>Dietary Restrictions</h3>
  <div className='dietary-selection-container'>
  <label>
  <input value="Vegan" type="checkbox" onChange={handleCheckBox} />
  Vegan&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Vegetarian" type="checkbox" onChange={handleCheckBox}/>
  Vegetarian&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Low Carb" type="checkbox" onChange={handleCheckBox}/>
  Low Carb&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Glutten-free" type="checkbox" onChange={handleCheckBox}/>
  Glutten-free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Fish-Free" type="checkbox"onChange={handleCheckBox} />
  Fish-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value=" Low Sodium" type="checkbox" onChange={handleCheckBox}/>
  Low Sodium&nbsp;&nbsp;
  </label>
  <label>
  <input value="Egg-Free" type="checkbox" onChange={handleCheckBox}/>
  Egg_Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Alcohol-Free" type="checkbox" onChange={handleCheckBox}/>
  Alcohol-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="celery-free" type="checkbox" onChange={handleCheckBox}/>
  Celery-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Kosher" type="checkbox" onChange={handleCheckBox}/>
  Kosher&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="DASH" type="checkbox" onChange={handleCheckBox}/>
  DASH&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="immuno-supportive" type="checkbox" onChange={handleCheckBox}/>
  Immuno- Supportive&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="keto-friendly" type="checkbox" onChange={handleCheckBox}/>
  Keto-Friendly&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Kidney-friendly" type="checkbox" onChange={handleCheckBox}/>
  Keto-Friendly&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="low-potassium" type="checkbox" onChange={handleCheckBox}/>
  Low Potassium&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Mediterranean" type="checkbox" onChange={handleCheckBox}/>
  Mediterranean&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="Mustard-free" type="checkbox" onChange={handleCheckBox}/>
  Mustard-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="paleo" type="checkbox" onChange={handleCheckBox}/>
  Paleo&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="pecatarian" type="checkbox" onChange={handleCheckBox}/>
  Pescatarian&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="red-meat-free" type="checkbox" onChange={handleCheckBox}/>
  Red-Meat-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="penut-free" type="checkbox" onChange={handleCheckBox}/>
  Peanut-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="sesame-free" type="checkbox" onChange={handleCheckBox}/>
  Sesame-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="shellfish-free" type="checkbox" onChange={handleCheckBox}/>
  Shellfish-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="sugar-conscious" type="checkbox" onChange={handleCheckBox}/>
  Sugar-Conscious&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="sulfite-free" type="checkbox" onChange={handleCheckBox}/>
  Sulphite-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="tree-nut-free" type="checkbox" onChange={handleCheckBox}/>
  Tree-Nut-Free&nbsp;&nbsp;&nbsp;
  </label>
  <label>
  <input value="wheat-free" type="checkbox" onChange={handleCheckBox}/>
  Wheat-Free&nbsp;&nbsp;&nbsp;
  </label>
    </div>
    <MoreDietaryRes />
  </div>

  )
}
export default DietaryRestrictions;