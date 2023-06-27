import Image from 'next/image'

function image(){
    return (
        <div>
            {
                ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'].map(path =>{
                    return (
                        <div key={path}>
                            <Image src={`/${path}.png`} alt="img" width='280' height='420' />

                        </div>
                    )
                })
            }
        </div>
    )
}

export default image