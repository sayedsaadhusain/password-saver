import React, { useState,useEffect } from 'react'

const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    
    useEffect(() => {
        let password = localStorage.getItem('password');
        if(password){
            setPasswordArray(JSON.parse(password))
        }
    },[])
    // 'anfn' is shorthand for arrow functions
    const savePassword = () => {
        setPasswordArray([...passwordArray, form]) 
        localStorage.setItem('password', JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form]);
    }
    const handelChange = (event) => {
        setform({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="container mx-auto p-4">
                <h1 className='text-white p-2 h1'>Your own password manager</h1>
                <div className="flex flex-col gap-4 items-center">
                    <input className='inp' type="email " value={form.site} onChange={handelChange} name='site' placeholder='Website/Email' />
                    <div className="flex w-full gap-4">
                        <input value={form.username} onChange={handelChange} name='username' className='inp' placeholder='Root' type="text" />
                        <input value={form.password} onChange={handelChange} name='password' className='inp' placeholder='password' type="password" />
                    </div>
                    <div className="text-lg">
                        <button onClick={savePassword} className='btn-blue flex place-items-center gap-2'>
                            <lord-icon
                                src="https://cdn.lordicon.com/hqymfzvj.json"
                                colors="primary:#ffffff"
                                trigger="hover" >
                            </lord-icon>Save
                        </button>
                    </div>
                </div>
                <div className="text-white py-4">
                    <h1 className='text-xl font-bold pb-2'>Your passwords</h1>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 &&<table class="table-auto w-full rounded-lg overflow-hidden">
                        <thead>
                            <tr>
                                <th className='p-2 bg-indigo-600/60'>Website url</th>
                                <th className='p-2 bg-indigo-600/60'>Password</th>
                                <th className='p-2 bg-indigo-600/60'>Username</th>
                            </tr>
                        </thead>
                        <tbody className='bg-indigo-500'>
                            {passwordArray.map((item,index)=>{
                                return <tr className='p-2' key={index}>
                                <td className='p-2'><a href={item.site} target="_blank">{item.site}</a></td>
                                <td className='p-2 border-l'>{item.username}</td>
                                <td className='p-2 border-l'>{item.password}</td>
                            </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}
export default Manager