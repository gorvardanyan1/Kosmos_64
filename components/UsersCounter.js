import { useEffect, useState } from "react"
import styles from "@/styles/Users.module.css"
const UsersCounter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            const element = document.getElementById('counter');
            if (element) {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                setIsVisible(isVisible);
            }
        };

        // Add a scroll event listener to check visibility
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {

        if (isVisible && count < 70) {
            const intervalId = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 10); // Adjust the interval duration as needed

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [isVisible, count]);
    return (
        <div id="counter" className={styles.container}>
            <h2>Users</h2>
            <h3>{count}k+</h3>
        </div>
    )
}

export default UsersCounter