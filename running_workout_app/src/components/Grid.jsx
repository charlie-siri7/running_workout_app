import { runningProgram as training_plan } from '../utils/index.js'
import RunCard from './RunCard.jsx'

export default function Grid() {
    const locked = true
    const selectedRun = 4
    return (
        <div className="training-plan-grid">
            { Object.keys(training_plan).map((run, runIndex) => {
                const type = runIndex % 7 === 1 ? 'Interval' :
                runIndex % 7 === 3 ? 'Tempo' :
                runIndex % 7 === 4 ? 'Rest' :
                runIndex % 7 === 6 ? 'Long Run' : 'Easy Run'
                const trainingPlan = training_plan[runIndex]
                const dayNum = ((runIndex / 8) <= 1) ? '0' + (runIndex + 1) : runIndex + 1
                const icon = runIndex % 7 === 1 ? (
                                // speed workout on day 2
                                <i className='fa-solid fa-bolt'></i>
                            ) : (
                                runIndex % 7 === 3 ? (
                                    // tempo workout on day 4
                                    <i className='fa-solid fa-music'></i>
                                ) : (
                                    runIndex % 7 === 4 ? (
                                        // rest on day 5
                                        <i className='fa-solid fa-bed'></i>
                                    ) : (
                                        // otherwise, easy, long, or race-pace run
                                        runIndex % 7 === 6 ? (
                                            // long run on day 7
                                            <i className='fa-solid fa-spinner'></i>
                                        ) : (
                                            // otherwise, easy, long, or race-pace run
                                            <i className='fa-solid fa-thumbs-up'></i>
                                        )
                                    )
                                )
                            )

                if (runIndex === selectedRun) {
                    return (
                        <RunCard key={runIndex} trainingPlan={trainingPlan} type={type} runIndex={runIndex} icon={icon} dayNum={dayNum} />
                    )
                }
                return (
                    <button className={'card plan-card ' + (locked ? 'inactive' : '')} key={runIndex}>
                        <div className='plan-card-header'>
                            <p>Day {dayNum}</p>
                        </div>
                        { locked ? (
                            <i className='fa-solid fa-lock'></i>
                        ) : (icon)}
                        <div className='plan-card-header'>
                            <h4><b>{type}</b></h4>
                        </div>
                    </button>
                );
            })}
        </div>
    )
}