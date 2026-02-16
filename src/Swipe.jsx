
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
export const Swipe=({data})=>
{

  const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '500px',
        numVisible: 1,
        numScroll: 1
    }
];

   
        const temp=(cont)=>
        {
            return(
                <>
                    <div className="flex flex-column align-items-center arrange3 text-center mt-5">
           <img src={cont.img} alt="" className='img_set2'  />
            <h1 style={{ margin: "0px", marginTop: "0.5em" }} className='text00'>{cont.heading}</h1>
            <p className='text3'>{cont.content}</p>
            </div>
        
        </>
                ) }
        return(
        <>
        <Carousel className='arrange4'
        value={data}
        itemTemplate={temp}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}/>

        </>
    )
}