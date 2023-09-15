import React from 'react'
import styles from "@/styles/Loader.module.css"
import Image from 'next/image'
const Loader = () => {
    return (
        <div className={styles.container}>
            <Image className={styles.taxi} src="/taxiAnim.png"
                width={64}
                height={64}
                alt='Taxi'
                quality={100}
            />
            <Image className={styles.earth}
                src="/globe.png"
                width={120}
                height={120}
                quality={100}
                alt='Earth'
            />
        </div>
    )
}

export default Loader