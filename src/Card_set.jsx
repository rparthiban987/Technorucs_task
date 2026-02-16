
import { Card } from 'primereact/card';

export const Card_set = ({ img, content, heading }) => {
    return (
        <>  
            <Card className='flex shadow-7 w-12 md:w-3  sm:w-1 arrange2 arr'>
                <div className="flex flex-column align-items-center text-center ">
                    <img src={img} alt="" className='img_set2' />
                    <h1 style={{ margin: "0px", marginTop: "0.5em" }}className='text00'>{heading}</h1>
                    <p className='text3'>{content}</p>
                </div>
            </Card>
        </>
    )
}