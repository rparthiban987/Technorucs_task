
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import img from './Images/img_1.png'
import img1 from './Images/img_3.jpg'
import img2 from './Images/img_4.png'
import img3 from './Images/img_5.png'
import img4 from './Images/img_6.png'
import { Card_set } from './Card_set';
import img5 from './Images/img_7.png'
import img6 from './Images/img_8.png'
import img7 from './Images/img_9.png'
import img8 from './Images/img_10.png'
import img9 from './Images/img_11.png'
import img10 from './Images/img_12.png'
import img11 from './Images/img_13.png'
import img14 from './Images/img_14.png'
import img15 from './Images/img_15.png'
import img16 from './Images/img_16.png'
import { Swipe } from './Swipe';

import { Divider } from 'primereact/divider';

const Home_page = () => {
    const items = [

        {
            label: "Home",
            url: "#home"

        },
        {
            label: "About us",
        },
        {
            label: "Services",
            url: "#services"

        },
        {
            label: "Solutions",
            items: [
                {
                    label: "Cards",
                    url: "#cards"
                }

            ]


        },
        {
            label: "Industries",

        },
        {
            label: "Resources",

        },
        {
            label: "Client",
        },
        {
            label: "Contact Us",
        },
        {
            label: "Footer",
            url: "#footer"
        },
        {
            label: <Button label='NOVA' className='btn 
            ' style={{ marginRight: "4em", backgroundColor: "#3a8d3f" }} />
        }


    ];

    const start = (
        <img src={img} alt='hi' height="40" className='img_set3' />
    );



    return (
        <>
            <div className='main_box'>
                <div className='sty'>
                    <div className='flex justify-content-center bg-success align-items-center p-3 text_1 ' style={{ backgroundColor: "#7fb665", fontFamily: "sans-serif" }}><span style={{ color: "black", fontWeight: "bold" }} className='text0'>SharePoint 2016/2019</span> &nbsp;&nbsp; <span style={{ color: "white" }} className='text0'>End of Life – Migration Planning Guide </span> <Button label="Get the e-book" className='btn' style={{ backgroundColor: "#3a8d3f" }} /></div>
                    <Menubar model={items} className=' flex p-2 justify-content-center nav1 col ' start={start} ></Menubar>
                </div>

                <div className='flex justify-content-center align-items-center flex-column img_set mt-7' id='home' >
                    <h1 className='text'>IT Solutions</h1>
                    <p className='text-center text1'>We build Solutions using Microsoft power platform,sharepoint,Fabric,Dynamic 365,<br />Salesforce,and AI to match the way your business work</p>
                    <Button label="Get Consultation" className='btn' style={{ marginLeft: "2em", backgroundColor: "#3a8d3f" }} />
                </div>

                <div className='arrange' >
                    <div>
                        <h1 className='text2'>Business Centric IT Solutions with<br />
                            Microsoft O365 at TechnoRUCS</h1>
                        <p className='text3'>At TechnoRUCS, Expertise in driving innovation through our advanced <br /> IT solutions. Whether it’s enhancing business processes, facilitating <br /> efficient communication, or automating workflows, we are your trusted <br /> partner in achieving digital excellence and business automation.</p>
                        <Button label='Learn more About us' icon="pi pi-arrow-right" iconPos='right' style={{ backgroundColor: "#3a8d3f", padding: "1em" }} />
                    </div>
                    <div className='arrange1'>
                        <img src={img1} alt="" className='img_set1 hide' />
                    </div>
                </div>

                <div className='flex justify-content-center align-items-center flex-column text-center'>
                    <h1 className='text2 mt-7' style={{ padding: "0px" }}>A Complete IT Solutions for All Businesses</h1>
                    <p className='text3 text-center'>We understand the unique requirements of different businesses and offer customized IT solutions to match.<br />
                        No matter your size, our expertise spans IT consulting, business automation, CRM, ERP, web, and mobile app development</p>
                </div>

                <div className='flex align-items-center justify-content-center text-center gap-3 flex-wrap' id="cards">
                    <Card_set img={img2} content={"Fueling innovation, we equip startups with the tools to streamline operations and foster growth from the ground up"} heading={"Startups"} />
                    <Card_set img={img3} content={"Enhancing efficiency and profitability, we empower small and medium-sized businesses to excel in a competitive landscape."} heading={"SMBs"} />
                    <Card_set img={img4} content={"Optimizing processes and productivity, we support enterprises in achieving their ambitious goals."} heading={"Enterprises"} />
                </div>

                <div className='flex justify-content-center align-items-center mt-5 flex-column text-center id="services"'>
                    <Button label='Explore Solution for your Business' icon="pi pi-arrow-right" iconPos='right' className='p-3' style={{ backgroundColor: "#3a8d3f" }} />
                    <h2 style={{ color: "green", letterSpacing: "0.3em", marginTop: "6em" }}>SERVICES</h2>
                    <p className='text4'>Comprehensive IT and <b>Business Automation</b> Services</p>
                    <div className='flex justify-content-center align-items-center w-full ' >
                        <Swipe
                            data={[
                                { img: img5, heading: "Custom App Development", content: "Tailored applications utilizing cutting-edge technologies for security, scalability, and user-friendliness." },
                                { img: img6, heading: "Workflow Automation", content: "Streamlining operations by identifying and implementing automation for enhanced efficiency." },
                                { img: img7, heading: "Data Visualization", content: "Translating complex data into clear and actionable insights through intuitive dashboards and reports." },
                                { img: img8, heading: "SharePoint Customization", content: "Crafting secure, scalable, and user-friendly intranet and LOB applications customized to your needs." },
                                { img: img9, heading: "Document Management", content: "Efficiently managing business documents with custom systems designed for your workflow." },
                                { img: img10, heading: "Data Integration", content: "Integrating diverse systems for improved business processes and streamlined operations." },
                                { img: img11, heading: "Migration Services", content: "Planning and executing smooth IT infrastructure migrations minimizing downtime." },
                            ]} />
                    </div>
                </div>

                <div className='flex justify-content-center align-items-center mt-7 footer w-full'>
                    <div className='flex flex-column align-items-center justify-content-center w-full'>
                        <img src={img16} alt="" className='size1' /><br />
                        <div className='flex flex-row'>
                            <img src={img14} alt="" className='size' />
                            <img src={img15} alt="" className='size' />
                        </div>
                    </div>

                </div>
                <footer className="flex  flex-column justify-content-center align-items-center  footer" id="footer">
                    <Divider className="custom-divider w-full">

                    </Divider>
                    <p className='text5'>&copy; 2026 TechnoRUCS. All Rights Reseved.</p>
                </footer>
            </div>

        </>
    )
}

export default Home_page

