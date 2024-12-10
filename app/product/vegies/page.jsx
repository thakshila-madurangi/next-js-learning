import React from 'react'
import Link from 'next/link'

const page  = () => {
  const vegies =[

    {
      id:1,
      veginame :"beans"
    },
    {
      id:2,
      veginame :"carrot"
    },
    {
      id:3,
      veginame :"pumpking"
    },
    {
      id:4,
      veginame :"tomato"
    },
    {
      id:5,
      veginame :"leeks"
    },

  ]
  return (
    <>
    <div>Vegi page</div>
    <Link href='/'>Back home</Link>

<ul>
{vegies.map((vegi)=>{
  return(
    <li><Link href={`/product/vegies/${vegi.veginame}`}> {vegi.veginame}</Link></li>
  )
})}
</ul>
</>

  )
}

export default page