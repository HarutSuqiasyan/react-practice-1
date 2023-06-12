import './Component3.css';

export function Component3(){
    let education = [
        {
            place: 'W3Schools.com',
            data: 'Forever',
            info: 'Web Development! All I need to know in one place'
        },
        {
            place: 'London Business School',
            data: '2013 - 2015',
            info: 'Master Degree'
        },
        {
            place: 'School of Coding',
            data: '2010 - 2013',
            info: 'Bachelor Degree'
        },
        
    ];
    return(
        <div className='Component3'>
            <h2>Education</h2>
            <div className='education'>
                {
                    education.map((item) => {
                        return(
                            <div>
                                <h4 className='place'>{item.place}</h4>
                                <p className='data'>Data: {item.data}</p>
                                <p className='info'>{item.info}</p>
                                <div className='hr'></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}