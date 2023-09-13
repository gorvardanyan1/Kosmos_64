import { useEffect, useState } from "react"
import styles from "@/styles/Users.module.css"
const UsersCounter = () => {
    const [user, setUser] = useState(0)
    useEffect(function () {
        const id = setInterval(function () {
            if (user < 70) {
                setUser(user + 1)
            }
        }, 100)
        return () => {
            clearInterval(id)
        }
    }, [user])
    return (
        <div className={styles.container}>
            <h2>Users</h2>
            <h3>{user}k+</h3>
        </div>
    )
}

export default UsersCounter