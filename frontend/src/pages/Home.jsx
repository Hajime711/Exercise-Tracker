import { useEffect } from "react";
import WorkoutCard from '../components/WorkoutCard'
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
        const getWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
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