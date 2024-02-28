import React from 'react';
import './ourGoals.css';

export default function OurGoals() {
    return (
        <>
            <div className="goals-background-image-container"> <img src='/OurGoal.png' alt="Goals Background" />
            </div>
            <div className="Goals-container">

                <div className="square-box-goal top-left">
                    <div class="grey-box-1"></div>
                    <div class="grey-box-2"></div>
                    <div className="goal-circle">
                        <img className="goal-image" src="/sustainableenergy.png" alt="Goal Image" />
                    </div>
                    <div className="goal-text-box">Self-Sustaining Power</div>
                    <div className="goal-text">
                        <p>
                            Our self-sustaining power generation redefines the norm. The system not only produces power but intelligently
                            utilizes it, creating a perpetual cycle of energy that charts a course toward true sustainability.
                        </p>
                    </div>
                </div>

                <div className="square-box-goal top-right">
                    <div class="grey-box-3"></div>
                    <div class="grey-box-4"></div>
                    <div className="goal-circle">
                        <img className="goal-image" src="/motorControl.png" alt="Goal Image" />
                    </div>
                    <div className="goal-text-box">Variable Speed Control</div>
                    <div className="goal-text">
                        Experience motion mastery with variable speed control. The dynamo takes the lead, allowing for a nuanced adjustment
                        of the engine's speed. It's not just control; it's the art of harmonizing speed.
                    </div>
                </div>

                <div className="square-box-goal bottom-left">
                    <div class="grey-box-1"></div>
                    <div class="grey-box-2"></div>
                    <div className="goal-circle">
                        <img className="goal-image" src="/offGrid.png" alt="Goal Image" />
                    </div>
                    <div className="goal-text-box">Off-Grid Power Generation</div>
                    <div className="goal-text">
                        Our off-grid power generation is a testament to empowerment. Breaking free from traditional grids, it brings
                        electricity to the most remote areas, lighting up possibilities and fostering progress.
                    </div>
                </div>

                <div className="square-box-goal bottom-right">
                    <div class="grey-box-3"></div>
                    <div class="grey-box-4"></div>
                    <div className="goal-circle">
                        <img className="goal-image" src="/regenerative_braking.png" alt="Goal Image" />
                    </div>
                    <div className="goal-text-box">Regenerative Braking</div>
                    <div className="goal-text">
                        With regenerative braking, every slowdown becomes an opportunity. Kinetic energy, otherwise lost, is harnessed and
                        transformed into power, contributing to an efficient and eco-conscious mode of transportation.
                    </div>
                </div>

                <img src="/Bulb.png" alt="Your Image" className="center-image" />
            </div>


        </>

    );
}


//to add the image directly stead of html and css

// {/* <div className="goals-section-container">
// <div className="goals-background-image-container">
//   <img src='/OurGoal.png' alt="Goals Background" />
// </div>
// {/* <div className="about-section-image-container">
//   <img src='/AboutUs.png' alt="About Section Image" />
// </div> */}
// <div className="goals-section-text-container">
//  <div>
//  <img src='/OurGoalsPoints.png' alt="Goals Points" />
//  </div>
// </div>
// </div> */}
