import { useState, useEffect } from "react";
import WorkoutCard from '../components/WorkoutCard'
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const [workouts,setWorkouts] = useState(null)

    useEffect(() => {
        const getWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                setWorkouts(json)
            }
        }
        getWorkouts()
    },[])
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => <WorkoutCard key={workout._id} workout={workout} />)}
            </div>    
            <WorkoutForm/>
        </div>
    );
};

export default Home;