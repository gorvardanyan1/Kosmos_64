import styles from "@/styles/Gagarin.module.css";
import 'animate.css/animate.min.css';
import Image from "next/image";
const GagarinInfo = () => {
    return (
        <div className={styles.component + " " + "animate__animated animate__bounceInLeft animate__delay-2s"} >
            <section >
                <img src="./gagarinAero.jpeg" alt="Gagarin" />
            </section>

            <section id="about">
                <h4>About</h4>

                <p>Авто парк "КОСМОС64"предлагает вам автомобили комфорт класса для трансфера из/в аэропорт ГАГАРИН.,а так же межгород любое направление.Мы доставим  вас от точки А до точки В с максимальным комфортом.                             Балаково.Вольск.Пенза.Маркс.Балашов.
                Пугачев.Ершов.Самара.
                Казань.Уфа.Москва.Любое направление по РФ,
                📌 Уcлуги предоставляютcя TОЛЬKO ДЛЯ ПОЕЗДОK HА РАCCТOЯНИE ОТ 200 KМ И БOЛEЕ. Мы предлагаем только ИНДИВИДУАЛЬНЫЕ ПОЕЗДКИ БЕЗ ПОПУТЧИКОВ.                                                    НАШИ ПРЕИМУЩЕСТВА:
                🎁 Скидка до 20% на обратную дорогу при поездке туда-обратно.
                💤 Бесплатное ожидание до 2 часов при расстоянии от 500 км. Затем – 600 рублей в час.
                👜 Перевозка малогабаритных грузов и корреспонденции по цене от 27 рублей за километр.
                🔥 Работаем 24/7!</p>


            </section>
        </div>
    )
}

export default GagarinInfo