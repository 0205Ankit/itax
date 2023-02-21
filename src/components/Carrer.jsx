import { Container, Flex, Heading, Paragraph, ZoomOutButton } from "../styles/globalStyles";
import { DataEnter, FieldsContainer, FormContainer, Image, InputField } from "../styles/CarrerStyles";
import { useState } from "react";



export default function Carrer() {

    const [data,setData]=useState({
        name:'',
        email:'',
        skills:'',
        phone:'',
        address:'',
        resume:''
    })
    const [showModal,setShowModal]=useState(false)
    const [showData,setShowData]=useState()

    const nameHandler=(e)=>{
        setData({...data,name:e.target.value})
    }
    const emailHandler = (e) => {
        setData({ ...data, email: e.target.value })
    }
    const addressHandler = (e) => {
        setData({ ...data, address: e.target.value })
    }
    const skillsHandler = (e) => {
        setData({ ...data, skills: e.target.value })
    }
    const phoneHandler = (e) => {
        setData({ ...data, phone: e.target.value })
    }
    const resumeHandler = (e) => {
        setData({ ...data, resume: e.target.value })
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        setShowModal(true)
        setShowData(data)
        setData({
            name: '',
            email: '',
            skills: '',
            phone: '',
            address: '',
            resume: ''
})
    }


    return <>
        <Container width='95%' margin='auto' padding='0 0 5rem 0'>
            <Heading
                size={'3rem'}
                center
                color={'#6353f1'}
                padding={'2rem 0 0 0'}
                family={'Lobster, cursive'}
            >
                Career with us
            </Heading>
            <Flex spaceBetween padding='4rem 0' >
                <Flex gap={'1rem'} column padding={'3rem 0 0 0 '} width='40%'>
                    <Paragraph
                        weight={600}
                        color={'#6353f1'}
                    >
                        HEY EVERYONE, THIS IS OUR COMPANY
                    </Paragraph>
                    <Heading
                        size={'5rem'}
                        color={'#6353f1'}
                        margin={'0'}
                        family={'Rye, cursive'}
                    >
                        We are Hiring
                    </Heading>
                    <ZoomOutButton margin={'1rem 0 0 0'}>EXPLORE MORE</ZoomOutButton>
                </Flex>
                <img src='../../images/hire.png' alt='heroImage' width={"550px"} height={'420px'} />
            </Flex>
            <Flex gap={'6rem'} padding='2rem 0'>
                <Image src='../../images/hireme.png' alt='heroImage' width={"550px"} height={'600px'} />
                <form onSubmit={submitHandler}>
                    <FormContainer>
                    <Heading
                        size={'3rem'}
                        center
                        color={'#6353f1'}
                        padding={'2rem 0 0 0'}
                        family={'Lobster, cursive'}
                    >
                        Application
                    </Heading>
                        <FieldsContainer>
                            <Flex gap='0.4rem' column padding='0.6rem 0 '>
                                <div>
                                    <label htmlFor='name'>Name:</label>
                                </div>
                                <InputField  
                                type={'text'} 
                                placeholder='Your Name' 
                                required 
                                id="name" 
                                onChange={nameHandler}
                                value={data.name}
                                />
                            </Flex>
                            <Flex gap='0.4rem' column padding='0.6rem 0 '>
                                <div>
                                    <label htmlFor='email'>Email:</label>
                                </div>
                                <InputField 
                                type={'email'} 
                                placeholder='Your Email' 
                                required 
                                id="email" 
                                value={data.email}
                                onChange={emailHandler}
                                />
                            </Flex>
                            <Flex gap='0.4rem' column padding='0.6rem 0 '>
                                <div>
                                    <label htmlFor='skills'>Skills:</label>
                                </div>
                                <InputField 
                                type={'text'} 
                                placeholder='Skills You Are Expert In..' 
                                required 
                                id="skills" 
                                onChange={skillsHandler}
                                value={data.skills}
                                />
                            </Flex>
                            <Flex gap='0.4rem' column padding='0.6rem 0 '>
                                <div>
                                    <label htmlFor='phone'>Phone:</label>
                                </div>
                                <InputField 
                                type={'number'} 
                                placeholder='Enter Your Phone' 
                                required 
                                id="phone" 
                                onChange={phoneHandler}
                                value={data.phone}
                                />
                            </Flex>
                            <Flex gap='0.4rem' column padding='0.6rem 0 '>
                                <div>
                                    <label htmlFor='address'>Address:</label>
                                </div>
                                <InputField 
                                type={'text'} 
                                placeholder='Your Current Address..' 
                                required 
                                id="address" 
                                onChange={addressHandler}
                                value={data.address}
                                />
                            </Flex>
                            <Flex gap='0.4rem' column padding='0.6rem 0 '>
                                <div>
                                    <label htmlFor='file'>Resume:</label>
                                </div>
                                <InputField 
                                type={'file'} 
                                placeholder='choose file' 
                                required 
                                id="file" 
                                onChange={resumeHandler}
                                value={data.resume}
                                />
                            </Flex>
                            <Flex gap='0.4rem' column padding='0.6rem 0 '>
                                <ZoomOutButton type="submit"size='1.2rem'>SUBMIT</ZoomOutButton>
                            </Flex>
                            <DataEnter>
                                {showModal&&<>
                                Name : {showData.name}<br/>
                                Email : {showData.email}<br/>
                                Skills : {showData.skills}<br/>
                                Address : {showData.address}<br/>
                                Phone : {showData.phone}<br/>
                                Resume : {showData.resume}<br/>
                                ------------------------------------
                                </>}
                            </DataEnter>
                        </FieldsContainer>
                    </FormContainer>
                </form>
            </Flex>
        </Container>
    </>
}