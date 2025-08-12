import ComponentThree from './ComponentThree'

const ComponentOne = () => {

    return (
        <section className="card-section">
            <div className='card-container'>
                <ComponentThree />
                <ComponentThree />
                <ComponentThree />
            </div>
            <p>COMPONENT ONE</p>
        </section>
    )
}

export default ComponentOne
