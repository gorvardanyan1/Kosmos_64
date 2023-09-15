import Image from "next/image"
import styles from "@/styles/Contacts.module.css"
const Contacts = () => {
    return (
        <div className={styles.container} id="contacts">
            <a href="tel:+7999999999">+7 999 999 999</a>
            <Image src="/telephone.png"
                width={60}
                height={60}
                alt="Phone"
            />
            <Image src="/whatsapp1.png"
                width={60}
                height={60}
                alt="Whats Up"
            />
            <Image src="/telegram.png"
                width={60}
                height={60}
                alt="Telegram"
            />
        </div>
    )
}

export default Contacts