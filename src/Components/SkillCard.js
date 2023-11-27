import React from 'react'

const SkillCard = ({ title, skill_list }) => {
    return (
        <div className='col-lg-4 mt-4'>
            <div class="card flex-grow-1">
                <div className="card-body">
                    <h5 className='m-0'>{title}</h5>
                </div>
                <div class="card-body">
                    <ul>
                        {skill_list.map((skill) => {
                            return <li>{skill}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default SkillCard