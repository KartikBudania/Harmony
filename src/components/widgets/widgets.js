import React, { useEffect, useState } from 'react'
import './widgets.css'
import apiClient from '../../spotify'
import WidgetCard from './widgetCard'

export default function Widgets({artistID}) {
    const [similar, setSimilar] = useState([])
    const [featured, setFeatured] = useState([])
    const [newRelease, setNewRelease] = useState([])
    const id =  artistID?.artists[0]?.id

    useEffect(() => {
        apiClient.get(`/artists/${id}/related-artists`)
        .then((res) => {
            const a = res.data?.artists.slice(0,3);
            setSimilar(a)
        })
        .catch((err) => console.error(err))

        apiClient.get(`/browse/featured-playlists`)
        .then((res) => {
            const a = res.data?.playlists.items.slice(0,3);
            setSimilar(a)
        })
        .catch((err) => console.error(err))

        apiClient.get(`/artists/${id}/related-artists`)
        .then((res) => {
            const a = res.data?.albums.items.slice(0,3);
            setSimilar(a)
        })
        .catch((err) => console.error(err))

    }, [id])


  return (
    <div className='widgets-body flex'>
        <WidgetCard title='Similar Artists' type={similar} />
        <WidgetCard title='Made For You' type={featured} />
        <WidgetCard title='New Releases' type={newRelease} />
    </div>
  )
}
