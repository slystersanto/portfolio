import React from 'react'

function Skill() {
  return (
    <>
    
    <section class="skills" id="skills">
    <div class="heading">
        <h2>Skills</h2>
        <span className='my-skills'>My Skills</span>
    </div>

    <div class="skills-container">
        <div class="bars">

            <div class="bars-box">
                <h3>HTML</h3>
                <span>94%</span>
                <div class="light-bar"></div>
                <div class="percent-bar html-bar"></div>
            </div>

            <div class="bars-box">
                <h3>CSS</h3>
                <span>84%</span>
                <div class="light-bar"></div>
                <div class="percent-bar css-bar"></div>
            </div>

            <div class="bars-box">
                <h3>JavaScript</h3>
                <span>74%</span>
                <div class="light-bar"></div>
                <div class="percent-bar js-bar"></div>
            </div>

            <div class="bars-box">
                <h3>React</h3>
                <span>80%</span>
                <div class="light-bar"></div>
                <div class="percent-bar react-bar"></div>
            </div>
            <div class="bars-box">
                <h3>MongoDb</h3>
                <span>75%</span>
                <div class="light-bar"></div>
                <div class="percent-bar mongodb-bar"></div>
            </div>

            <div class="bars-box">
                <h3>Express.Js</h3>
                <span>80%</span>
                <div class="light-bar"></div>
                <div class="percent-bar express-bar"></div>
            </div>

            <div class="bars-box">
                <h3>Node.Js</h3>
                <span>70%</span>
                <div class="light-bar"></div>
                <div class="percent-bar node-bar"></div>
            </div>
        </div>
        <div class="skills-img">
            <img src="main.png" alt="Skill"/>
        </div>
    </div>
</section>
    
    
    
    
    
    
    </>
  )
}

export default Skill;