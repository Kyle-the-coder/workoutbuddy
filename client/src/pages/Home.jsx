import { useEffect, useState } from "react";
import fire from "../assets/IgniteLogo1.svg";
import logoB from "../assets/IgniteLogoBlack.svg";
import logo3 from "../assets/IgniteLogo3dBlack.svg";
import logoW from "../assets/IgniteLogo3d.svg";
export function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <img src={logo3} width="1400px" height="1400px" />
      <img src={logoW} width="1400px" height="1400px" />
      <img src={logoW} width="400px" height="400px" />
      <img src={logo3} width="400px" height="400px" />
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => {
            return <p key={workout._id}>{workout.title}</p>;
          })}
      </div>
    </div>
  );
}
