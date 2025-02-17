import { useEffect, useState } from "react";
export function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      console.log(response);
      //   console.log(json);

      //   if (response.ok) {
      //     setWorkouts(json);
      //   }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => {
            return <p key={workout._id}>{workout.title}</p>;
          })}
      </div>
    </div>
  );
}
