import './Component2.css';

export function Component2 (){
    let works = [
        {
            work: 'Front End Developer',
            site:  'w3schools.com',
            data1: 'Jan 2015',
            data2: 'Current',
            info: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
        },
        {
            work: 'Web Developer',
            site:  'something.com',
            data1: 'Mar 2012',
            data2: 'Dec 2014',
            info: 'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
        },
        {
            work: 'Graphic Designer',
            site:  'designsomething.com',
            data1: 'Jun 2010',
            data2: ' Mar 2012',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit..'
        },
    ]

    return(
        <div className='Component2'>
            <h2>Work Experience</h2>
            <div className='works__components'>
                {
                    works.map((work) => {
                        return(
                            <div>
                                <p className='work__site'>{work.work} / {work.site}</p>
                                <h3>Data: {work.data1} - {work.data2}</h3>
                                <p className='work__info'>{work.info}</p>
                                <div className='hr'></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
// Full Responsive max width 655px