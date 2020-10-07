import React, {useState, useEffect} from 'react'

export default function DataFetch() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch ('https://data.cdc.gov/resource/r8kw-7aab.json')
        .then(res => (
            res.json()
        ))
        .then(respone => {
            console.log(respone)
            setPosts(respone)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                    <li>{post.total_deaths}</li>
                    ))
                }
            </ul>
        </div>
    )
}

