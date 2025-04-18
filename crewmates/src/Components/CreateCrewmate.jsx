import { useState } from 'react';
import { supabase } from '../client.jsx';

const CreateCrewmate = () => {
    const [inputs, setInputs] = useState({
        name: "",
        color: "",
        hat: "",
        age: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const newCrewmate = async (e) => {
        e.preventDefault();
        
        await supabase 
            .from('crewmates')
            .insert({
                name: inputs.name,
                color: inputs.color,
                hat: inputs.hat,
                age: inputs.age
            })
            .select();
        
        
        console.log(inputs);
        window.location = "/gallery";
    }

    // Color and hat options
    const colorOptions = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Black", "White", "Brown"];
    const hatOptions = ["None", "Crown", "Sheriff Hat", "Cap", "Beanie", "Witch Hat", "Party Hat", "Fedora"];

    return (
        <div className="content">
            <h2>Create A New Crewmate</h2>

            <form className="crewmate-form">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={inputs.name} 
                        onChange={handleChange}
                        required
                    />
                
                    <label htmlFor="color">Color:</label>
                    <select 
                        id="color" 
                        name="color" 
                        value={inputs.color} 
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a color</option>
                        {colorOptions.map(color => (
                            <option key={color} value={color.toLowerCase()}>{color}</option>
                        ))}
                    </select>
                
                    <label htmlFor="hat">Hat:</label>
                    <select 
                        id="hat" 
                        name="hat" 
                        value={inputs.hat} 
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a hat</option>
                        {hatOptions.map(hat => (
                            <option key={hat} value={hat.toLowerCase()}>{hat}</option>
                        ))}
                    </select>
                
                    <label htmlFor="age">Age:</label>
                    <input 
                        type="number" 
                        id="age" 
                        name="age" 
                        value={inputs.age} 
                        onChange={handleChange}
                        min="1"
                        required
                    />
                
                <button type="submit" className="submit-btn" onClick={newCrewmate} >Create Crewmate</button>
            </form>
        </div>
    )
}

export default CreateCrewmate;