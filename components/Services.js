import styles from "@/styles/Services.module.css"
import 'animate.css/animate.min.css';
const Services = () => {
    return (
        <div className={styles.container + " " + "animate__animated animate__bounceInRight animate__delay-2s"}>
            <h2>Services</h2>
            <section className={styles.services}>
                <div>
                    <img src="./jac.jpg" alt="Jac" />
                    <h3>mark <span>Jac</span> </h3>
                    <h4>model <span> J7</span></h4>
                    <h6>users <span>10K+</span></h6>
                </div>
                <div>
                    <img src="./jac.jpg" alt="Jac" />
                    <h3>mark <span>Jac</span></h3>
                    <h4>model <span>J7</span></h4>
                    <h6>users <span>5k+</span></h6>
                </div>
                <div>
                    <img src="./jac.jpg" alt="Jac" />
                    <h3>mark <span>Jac</span></h3>
                    <h4>model <span>J7</span></h4>
                    <h6>users <span>3k+</span></h6>
                </div>
            </section>
        </div>
    )
}

export default Services