import './Component1.css';

export function Component1(){
    let info = [
        {
            info1: 'Work',
            info2: 'Designer'
        },
        {
            info1: 'Home',
            info2: 'London, UK'
        },
        {
            info1: 'Email',
            info2: 'ex@mail.com'
        },
        {
            info1: 'Telephone',
            info2: '1224435534'
        }
    ];
    let skills = [
        {
            skill: 'Photoshop',
            percentage: '90%'
        },
        {
            skill: 'Photography',
            percentage: '80%'
        },
        {            
            skill: 'Illustrator',
            percentage: '70%'
        },
        {
            skill: 'Media',
            percentage: '50%'
        },

    ];
    let languages = [
        {
            language: 'English',
        },
        {
            language: 'Spanish',
        },
        {
            language: 'German',
        },
    ];
    return(
        <div className="component__1">
            <div className="component__1__img">
                <p>Jane Doe</p>
            </div>
            <div className='component__1__info'>
                {
                    info.map((item) => {
                        return(
                            <div className='info__item'>{item.info1}: {item.info2}</div>
                        )
                    })
                }
            </div>
            <div className='hr'></div>
            <div className='component__1__skills'>
                <p className='skills'>Skills</p>
                {
                    skills.map((item) => {
                        return(
                            <div>
                                <p className='skill__name'>{item.skill}</p>
                                <div className='indicator-box'>
                                    {item.percentage}
                                </div>                              
                            </div>
                        )
                    })
                }
            </div>
            <div className='component__1__languages'>
                <p className='languages'>Languages</p>
                {
                    languages.map((item)=>{
                        return(
                            <div>
                                <p className='language'>{item.language}</p>
                                <div className='indicator'>

                                </div>     
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
