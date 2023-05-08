import React, { useEffect, useState } from 'react'
import { useTrail, a } from '@react-spring/web'

import styles from './styles.module.css'

const Trail = ({ open, children }) => {

    const [open, set] = useState(false)
    useEffect(()=> {
        setTimeout(() => {
            set(true)
        }, 1000);
    } ,[])

    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className={styles.trailsText} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}
