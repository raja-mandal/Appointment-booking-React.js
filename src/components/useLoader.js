import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import Loading from './Loading';

export default function useLoader() {

    const [isLoading, setLoading] = React.useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    })
    return (
        <>
            {
                isLoading == true ? <Loading /> : <Dashboard />
            }
        </>
    )
}
