import styles from "@/styles/Gagarin.module.css";
import 'animate.css/animate.min.css';
const GagarinInfo = () => {
    return (
        <div className={styles.component + " " + "animate__animated animate__bounceInLeft animate__delay-2s"} >
            <section >
                <img src="./gagarinAero.jpeg" alt="Gagarin" />
            </section>

            <section>
                <h4>About</h4>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit cursus velit eget rhoncus. Vivamus varius sapien vitae nunc posuere molestie. Nulla molestie orci leo, eget mattis erat sollicitudin ut. Nunc dignissim luctus dui sed lobortis. Quisque sodales metus nec porttitor pellentesque. Nunc orci tellus, condimentum vitae porta nec, gravida sit amet nisl. Nam faucibus rhoncus tempor. Curabitur nulla augue, blandit nec condimentum eget, sagittis at risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id erat porttitor, hendrerit nunc eget, commodo magna. Phasellus interdum dui elit, non dapibus magna porta tempus.</p>


            </section>
        </div>
    )
}

export default GagarinInfo