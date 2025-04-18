import React, { useEffect, useState } from 'react'
import { supabase } from '../client.jsx'
import { Link } from 'react-router-dom'

const CrewmateGallery = () => {
    const [crewmates, setCrewmates] = useState([])
    
    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select()
                .order('created_at', { ascending: false })
            if (error) {
                console.error("Error fetching crewmates:", error)
            } else {
                console.log("Crewmates:", data)
            }

            setCrewmates(data)
        }

        fetchCrewmates()
    }, [])

    return (
        <div className="content">
            <h2>Crewmate Gallery</h2>
            <div className="gallery">
                {crewmates.map((crewmate) => (
                    <div key={crewmate.id} className="crewmate-card" style={{ borderColor: crewmate.color }}>
                        <div className="crewmate-avatar" style={{ backgroundColor: crewmate.color }}>
                            {crewmate.hat !== 'none' && (
                                <div className="crewmate-hat">{crewmate.hat}</div>
                            )}
                        </div>
                        <div className="crewmate-info">
                            <h3>{crewmate.name}</h3>
                            <p>Age: {crewmate.age}</p>
                            <p>Color: {crewmate.color}</p>
                            <p>Hat: {crewmate.hat}</p>
                        </div>
                        <div className="card-actions">
                            <Link to={`/edit/${crewmate.id}`} className="edit-button">Edit</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CrewmateGallery