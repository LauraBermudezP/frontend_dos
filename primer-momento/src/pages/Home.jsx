import ComponentOne from "../components/ComponentOne"
import ComponentTwo from "../components/ComponentTwo"

const Home = () => {
    return (
        <div>
            <ComponentTwo />
            <div className="layout-content">
                <ComponentOne/>
            </div>
        </div>
    )
}

export default Home
