import React from "react"
import Modal from "./Modal"

export default function RunCard(props) {
    const { trainingPlan, runIndex, type, dayNum, icon } = props

    const { warmup, run, cooldown } = trainingPlan || {}

    const showExerciseDescription = { name: 'name', description: 'description' }

    return (
        <div className="run-container">
  <Modal
    showExerciseDescription={showExerciseDescription}
    handleCloseModal={() => {}} />
            <div className="run-card card">
                <div className="plan-card-header">
                    <p>Day {dayNum}</p>
                    {icon}
                </div>
                <div className="plan-card-header">
                    <h2><b>{type} Workout</b></h2>
                </div>
            </div>
            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Warmup</h4>
                </div>
                <h6>Run</h6>
                <h6>Pace</h6>
                <h6>Cooldown</h6>
                {warmup.map((warmupExercise, warmupIndex) => {
                    return (
                        <React.Fragment key={warmupIndex}>
                            <div className="exercise-name">
                                <p>{warmupIndex + 1}. {warmupExercise.name}</p>
                                <button className="help-icon">
                                    <i className="fa-regular fa-circle-question"></i>
                                </button>
                            </div>
                                <p className="exercies-info">{warmupExercise.leg}</p>
                                <p className="exercies-info">{warmupExercise.sets}</p>
                                <p className="exercies-info">{warmupExercise.miles}</p>
                                <input className="speed-input" placeholder="Speed (mph): 6.0" disabled />
                        </React.Fragment>
                    )
                })}
            </div>

            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Run/Workout</h4>
                </div>
                <h6>Run</h6>
                <h6>Pace</h6>
                <h6>Cooldown</h6>
                {run.map((runExercise, runIndex) => {
                    return (
                        <React.Fragment key={runIndex}>
                            <div className="exercise-name">
                                <p>{runIndex + 1}. {runExercise.name}</p>
                                <button className="help-icon">
                                    <i className="fa-regular fa-circle-question"></i>
                                </button>
                            </div>
                                <p className="exercies-info">{runExercise.time}</p>
                                <p className="exercies-info">{runExercise.reps}</p>
                                <p className="exercies-info">{runExercise.miles}</p>
                                <input className="speed-input" placeholder="Speed (mph): 7.0" disabled />
                        </React.Fragment>
                    )
                })}
            </div>

            <div className="run-buttons">
                <button>Save/Exit</button>
                <button disabled={true}>Complete</button>
            </div>
        </div>
    )
}