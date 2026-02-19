import { useState } from 'react'
import { getTable } from '../api/api.js'
import { useEffect } from 'react';

export default function DataPage() {
    const [city, setCity] = useState("")
    const [greater, setGreater] = useState("")
    const [smaller, setSmaller] = useState("")
    const [data, setData] = useState([]);
    useEffect(() => {
        getTable().then(res => { setData(res.slice(0, 50)); })
            .catch(console.error)
    }, [])
    return (
        <>
            <div>
                <form>
                    <input onChange={e => {
                        setCity(e.target.value)
                    }
                    } type="text" placeholder="City / Country" />

                    <input onChange={e => {
                        setGreater(e.target.value)
                        
                    }
                    } type="text" placeholder="Greater than:" />

                    <input onChange={e => {
                        setSmaller(e.target.value)
                    }
                    } type="text" placeholder="Smaller than:" />
                    <button>Clear filter</button>
                </form>
            </div>
            <table>
                <tr>
                    <th>Event id</th>
                    <th>year</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Attack type</th>
                    <th>Motive</th>
                </tr>
                {
                    data.map((element) => {
                        return (
                            <tr>
                                <td>{element.eventid}</td>
                                <td>{element.iyear}</td>
                                <td>{element.country_txt}</td>
                                <td>{element.city}</td>
                                <td>{element.attacktype1_txt}</td>
                                <td>{element.motive}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}
