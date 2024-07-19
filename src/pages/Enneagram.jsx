import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import axiosInstance from '../axios';
import baseUrl from '../baseUrl';
import { useTranslation } from 'react-i18next';
import left from '../images/left.png'
import right from '../images/right.png'
import bottom from '../images/bottom.png'
import bottomleft from '../images/bottomleft.png'
import center from '../images/center.png'

function Enneagram() {
    const { t, i18n } = useTranslation();
    const { id } = useParams()
    const [cats, setCats] = useState(null)
    const [answer, setAnswer] = useState(null)
    const [all, setAll] = useState([])
    const [index, setIndex] = useState(0)
    const [view, setView] = useState('start')
    const [Transition, setTransition] = useState(true)
    const [results, setResults] = useState(null)
    const [currentWidth, setCurrentWidth] = useState(0)

    useEffect(() => {
        // if (view === 'test') {

        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = ''; // Some browsers require returnValue to be set.
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
        // }
    }, []);


    const [formdata, setFormData] = useState({
        id: '',
        level: ''
    })
    useEffect(() => {
        console.log(formdata, 'formdata');
        console.log(all, 'all formdata');
    }, [formdata]);


    const sendAnswers = async () => {
        if (answer) {

            try {
                // isLoading(true)
                const response = await axiosInstance.post(`${baseUrl}api/answer`, all);

                console.log('enneagram response in post request', response);
                if (response.status == 200 || 201 || 202) {
                    setResults(response.data)
                    setView('result')
                }
                // setCats(response?.data.data)
                // isLoading(false)

            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
    }

    const selectAnswer = () => {
        if (answer) {
            setTransition(false);
            setTimeout(() => {
                setTransition(true);
            }, 100);
            // setTransition(true)
            const newFormData = {
                id: cats ? cats[index]?.id : '',
                type: cats[index]?.type,
                level: answer - 1
            };

            setCurrentWidth(((index + 1) * 100) / cats?.length)
            console.log(currentWidth, 'currentWidth');
            // console.log(currentWidth, index + 1 / cats?.length);
            setFormData(newFormData);

            setAll(prevAll => [
                ...prevAll,
                newFormData
            ]);

            setIndex(index + 1);
            setAnswer(null);
            // setTransition(false)

        }
    };

    // const baseUrl = `http://216.250.11.159:8080/`
    const getCats = async () => {
        try {
            // isLoading(true)
            const response = await axiosInstance.get(`${baseUrl}api/enneagram`);

            console.log('enneagram response', response.data.data);
            setCats(response?.data.data)
            // isLoading(false)

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
    useEffect(() => {
        getCats()
    }, [i18n.language, id])


    return (
        <div className='relative  min-h-[90vh]'>
            <div className="container">
                <div className='flex w-8/12 mx-auto  items-center my-10 gap-3'>
                    <NavLink to={`/`} className=' text-[#CFCFCF] hover:text-[#5E5E5E] cursor-pointer'>{t('key')}</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                        <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                    </svg>
                    <div className=' text-[#CFCFCF]'>Ugur Saýla</div>
                </div>
            </div>
            {view === 'start' &&
                <div>
                    <div className="container">
                        <div className="w-8/12 mx-auto text-center ">
                            <div className='font-semibold text-2xl  mx-auto'>

                                Ugur Saýlamak Üçin Siziň Şahsyýetiňiziň Ýeterlilik Derejesini Barlamak Üçin Test Tabşyryň
                            </div>
                            <div className='text-[#B4B4B4] text-md w-1/2 mx-auto mt-3'>
                                Siziň beren ballaryňyz boýunça size iň ýakyn şahsyýet görnüşi anyklanar
                            </div>
                            <img src={center} className='mx-auto mt-10' alt="" />
                            <div className='bg-[#1E88E5] rounded-full p-3 cursor-pointer text-white w-max mx-auto' onClick={() => setView('test')} >Teste Başla</div>
                        </div>
                    </div>
                    <img src={left} className='absolute left-0 top-1 w-[10%]' alt="" />
                    <img src={bottomleft} className='absolute left-0 w-1/3  -bottom-1/2 z-[-1] ' alt="" />
                    <img src={bottom} className='absolute right-0 w-4/12  -bottom-1/3 z-[-1] ' alt="" />
                    <img src={right} className='absolute right-0 w-[13%]  bottom-20 z-[-1] ' alt="" />
                </div>
            }
            {view === 'test' &&
                <div className='container'>
                    <div className='w-8/12 mx-auto '>
                        <div className={` ${Transition ? 'opacity-1 transition-opacity duration-500 ease-in-out' : 'opacity-0'
                            } font-semibold text-2xl  `}>
                            {index + 1}. {cats[index]?.title}
                        </div>
                        <div className='text-[#B4B4B4]  w-2/3 text-md my-6'>
                            Aşakdakylardan siziň şahsyýetiňize tanadýan iň ýakyn göterimi saýlaň
                        </div>
                        <div className="grid gap-2 mt-10 grid-cols-5">
                            <div onClick={() => setAnswer(1)} className={`${answer === 1 && 'border border-2 border-[#1E88E5]'} w-full bg-[#FFE5E5] cursor-pointer rounded-s-[25px] rounded-e-[10px] flex justify-center items-center flex-col  aspect-square`}><svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 37 36" fill="none">
                                <path d="M5.31015 30.7226C2.34333 27.7775 0.497442 23.9029 0.0869946 19.7589C-0.323453 15.6149 0.726935 11.4579 3.05919 7.9961C5.39145 4.53435 8.86127 1.98204 12.8775 0.774042C16.8937 -0.433953 21.2078 -0.222896 25.0847 1.37125C28.9617 2.9654 32.1616 5.84402 34.1394 9.51663C36.1171 13.1892 36.7502 17.4286 35.9309 21.5125C35.1116 25.5963 32.8905 29.272 29.646 31.9132C26.4016 34.5544 22.3346 35.9977 18.1379 35.9972C15.7544 36.0035 13.3933 35.5405 11.1914 34.6351C8.98948 33.7297 6.99048 32.3999 5.31015 30.7226ZM6.36102 6.30973C3.63661 9.01311 1.94121 12.5701 1.56368 16.3747C1.18614 20.1794 2.14984 23.9962 4.29056 27.1748C6.43128 30.3535 9.61658 32.6973 13.3037 33.807C16.9909 34.9167 20.9518 34.7235 24.5115 33.2604C28.0712 31.7974 31.0095 29.1549 32.8258 25.7833C34.642 22.4117 35.2239 18.5195 34.4721 14.77C33.7204 11.0204 31.6817 7.6455 28.7032 5.22022C25.7248 2.79494 21.9909 1.46936 18.1379 1.46935C15.9498 1.46346 13.7823 1.88824 11.7608 2.71909C9.7393 3.54994 7.90396 4.77037 6.36102 6.30973Z" fill="#8E2834" />
                                <path d="M23.7889 17.8914C25.097 17.8914 26.1574 16.5019 26.1574 14.7879C26.1574 13.0738 25.097 11.6843 23.7889 11.6843C22.4808 11.6843 21.4204 13.0738 21.4204 14.7879C21.4204 16.5019 22.4808 17.8914 23.7889 17.8914Z" fill="#8E2834" />
                                <path d="M11.9988 17.8914C13.3069 17.8914 14.3673 16.5019 14.3673 14.7879C14.3673 13.0738 13.3069 11.6843 11.9988 11.6843C10.6908 11.6843 9.63037 13.0738 9.63037 14.7879C9.63037 16.5019 10.6908 17.8914 11.9988 17.8914Z" fill="#8E2834" />
                                <path d="M24.4993 27.8527V28.2294H11.7788V27.8527C11.7788 27.0239 11.9433 26.2033 12.263 25.4377C12.5826 24.672 13.0511 23.9763 13.6417 23.3903C14.2323 22.8043 14.9334 22.3395 15.7051 22.0224C16.4767 21.7052 17.3038 21.542 18.139 21.542C18.9743 21.542 19.8013 21.7052 20.573 22.0224C21.3447 22.3395 22.0458 22.8043 22.6364 23.3903C23.227 23.9763 23.6955 24.672 24.0151 25.4377C24.3348 26.2033 24.4993 27.0239 24.4993 27.8527Z" fill="#8E2834" />
                            </svg>
                                <span className='mt-4 text-[#C94545]'>0%</span>
                            </div>
                            <div onClick={() => setAnswer(2)} className={` ${answer === 2 && 'border border-2 border-[#1E88E5]'} w-full bg-[#FFEEE7] cursor-pointer  rounded-[10px] flex justify-center items-center flex-col  aspect-square`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 37 36" fill="none">
                                    <path d="M5.31071 30.7245C2.34367 27.7793 0.497603 23.9046 0.0870397 19.7603C-0.323524 15.6161 0.726819 11.4589 3.05911 7.99688C5.3914 4.53489 8.86134 1.98237 12.8777 0.774213C16.8941 -0.433943 21.2084 -0.222984 25.0856 1.37115C28.9628 2.96528 32.163 5.84395 34.1409 9.51669C36.1188 13.1894 36.7521 17.429 35.9329 21.5131C35.1136 25.5972 32.8925 29.2731 29.648 31.9145C26.4035 34.5559 22.3363 35.9994 18.1394 35.9991C15.7558 36.0053 13.3946 35.5423 11.1925 34.637C8.99042 33.7316 6.99124 32.4017 5.31071 30.7245ZM6.36252 6.31161C3.63812 9.01499 1.94271 12.572 1.56518 16.3766C1.18764 20.1812 2.15134 23.998 4.29207 27.1767C6.43279 30.3553 9.61809 32.6992 13.3052 33.8089C16.9924 34.9185 20.9533 34.7254 24.513 33.2623C28.0727 31.7993 31.011 29.1568 32.8273 25.7852C34.6435 22.4136 35.2254 18.5214 34.4736 14.7719C33.7219 11.0223 31.6832 7.64738 28.7047 5.2221C25.7263 2.79682 21.9924 1.47125 18.1394 1.47124C15.9513 1.46535 13.7838 1.89012 11.7623 2.72097C9.74081 3.55183 7.90547 4.77225 6.36252 6.31161Z" fill="#C94545" />
                                    <path d="M23.7899 17.8931C25.0979 17.8931 26.1583 16.5036 26.1583 14.7896C26.1583 13.0755 25.0979 11.686 23.7899 11.686C22.4818 11.686 21.4214 13.0755 21.4214 14.7896C21.4214 16.5036 22.4818 17.8931 23.7899 17.8931Z" fill="#C94545" />
                                    <path d="M11.9993 17.8931C13.3074 17.8931 14.3678 16.5036 14.3678 14.7896C14.3678 13.0755 13.3074 11.686 11.9993 11.686C10.6913 11.686 9.63086 13.0755 9.63086 14.7896C9.63086 16.5036 10.6913 17.8931 11.9993 17.8931Z" fill="#C94545" />
                                    <path d="M11.2384 27.0924C11.3401 27.0923 11.4406 27.0716 11.5339 27.0314C11.6271 26.9912 11.711 26.9325 11.7805 26.8588C13.4749 25.0626 15.6146 24.1527 18.1407 24.1527C20.6667 24.1527 22.8055 25.0626 24.5009 26.8588C24.6357 27.0016 24.8222 27.0853 25.0193 27.0917C25.2164 27.098 25.4079 27.0265 25.5518 26.8927C25.6957 26.7589 25.7801 26.5739 25.7865 26.3784C25.7929 26.1828 25.7208 25.9928 25.586 25.85C23.6266 23.7779 21.0531 22.6777 18.1416 22.6777C15.1903 22.6777 12.6851 23.7449 10.6983 25.85C10.5994 25.9551 10.5335 26.0866 10.5089 26.2283C10.4842 26.37 10.5018 26.5158 10.5595 26.6477C10.6171 26.7797 10.7124 26.892 10.8335 26.971C10.9546 27.05 11.0963 27.0922 11.2413 27.0924H11.2384Z" fill="#C94545" />
                                </svg>
                                <span className='mt-4 text-[#8E2834]'>25%</span>
                            </div>
                            <div onClick={() => setAnswer(3)} className={`${answer === 3 && 'border border-2 border-[#1E88E5]'} w-full bg-[#FFFAE0] cursor-pointer  rounded-[10px] flex justify-center items-center flex-col  aspect-square`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 37 36" fill="none">
                                    <path d="M5.31015 30.7226C2.34333 27.7775 0.497442 23.9029 0.0869947 19.7589C-0.323453 15.6149 0.726933 11.4579 3.05919 7.9961C5.39144 4.53435 8.86127 1.98204 12.8775 0.774042C16.8937 -0.433953 21.2078 -0.222896 25.0847 1.37125C28.9617 2.9654 32.1616 5.84402 34.1394 9.51663C36.1171 13.1892 36.7502 17.4286 35.9309 21.5125C35.1116 25.5963 32.8905 29.272 29.646 31.9132C26.4016 34.5544 22.3346 35.9977 18.1379 35.9972C15.7544 36.0035 13.3933 35.5405 11.1914 34.6351C8.98948 33.7297 6.99048 32.3999 5.31015 30.7226ZM6.36101 6.30973C3.63661 9.01311 1.94121 12.5701 1.56368 16.3747C1.18614 20.1794 2.14983 23.9962 4.29056 27.1748C6.43128 30.3535 9.61659 32.6973 13.3037 33.807C16.9909 34.9167 20.9518 34.7235 24.5115 33.2604C28.0712 31.7974 31.0095 29.1549 32.8258 25.7833C34.642 22.4117 35.2239 18.5195 34.4721 14.77C33.7204 11.0204 31.6816 7.6455 28.7032 5.22022C25.7248 2.79494 21.9909 1.46936 18.1379 1.46935C15.9498 1.46346 13.7823 1.88824 11.7608 2.71909C9.7393 3.54994 7.90396 4.77037 6.36101 6.30973Z" fill="#E5B92C" />
                                    <path d="M23.7879 17.8914C25.096 17.8914 26.1564 16.5019 26.1564 14.7879C26.1564 13.0738 25.096 11.6843 23.7879 11.6843C22.4798 11.6843 21.4194 13.0738 21.4194 14.7879C21.4194 16.5019 22.4798 17.8914 23.7879 17.8914Z" fill="#E5B92C" />
                                    <path d="M11.9988 17.8914C13.3069 17.8914 14.3673 16.5019 14.3673 14.7879C14.3673 13.0738 13.3069 11.6843 11.9988 11.6843C10.6908 11.6843 9.63037 13.0738 9.63037 14.7879C9.63037 16.5019 10.6908 17.8914 11.9988 17.8914Z" fill="#E5B92C" />
                                    <path d="M11.7101 25.6205H23.7917C23.9888 25.6205 24.1779 25.5428 24.3173 25.4045C24.4567 25.2662 24.535 25.0786 24.535 24.883C24.535 24.6874 24.4567 24.4998 24.3173 24.3615C24.1779 24.2232 23.9888 24.1455 23.7917 24.1455H11.7101C11.513 24.1455 11.3239 24.2232 11.1845 24.3615C11.0451 24.4998 10.9668 24.6874 10.9668 24.883C10.9668 25.0786 11.0451 25.2662 11.1845 25.4045C11.3239 25.5428 11.513 25.6205 11.7101 25.6205Z" fill="#E5B92C" />
                                </svg>
                                <span className='mt-4 text-[#E5B92C]'>50%</span>
                            </div>
                            <div onClick={() => setAnswer(4)} className={`${answer === 4 && 'border border-2 border-[#1E88E5]'} w-full bg-[#F4FFD6] cursor-pointer  rounded-[10px] flex justify-center items-center flex-col  aspect-square`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 37 36" fill="none">
                                    <path d="M5.31071 30.7245C2.34364 27.7793 0.497569 23.9045 0.0870285 19.7602C-0.323512 15.616 0.726875 11.4587 3.05923 7.99668C5.39159 4.53469 8.86162 1.9822 12.8781 0.77411C16.8945 -0.433979 21.2089 -0.22292 25.086 1.37133C28.9632 2.96557 32.1634 5.84437 34.1412 9.51721C36.119 13.1901 36.7521 17.4297 35.9327 21.5138C35.1133 25.5979 32.892 29.2737 29.6474 31.915C26.4027 34.5563 22.3354 35.9996 18.1385 35.9991C15.755 36.0052 13.3939 35.5422 11.1921 34.6368C8.99015 33.7314 6.99113 32.4016 5.31071 30.7245ZM6.36157 6.31161C3.63717 9.01499 1.94177 12.572 1.56423 16.3766C1.1867 20.1812 2.1504 23.998 4.29112 27.1767C6.43184 30.3553 9.61714 32.6992 13.3043 33.8089C16.9914 34.9185 20.9523 34.7254 24.512 33.2623C28.0717 31.7993 31.0101 29.1568 32.8263 25.7852C34.6426 22.4136 35.2244 18.5214 34.4727 14.7719C33.721 11.0223 31.6822 7.64738 28.7038 5.2221C25.7253 2.79682 21.9915 1.47125 18.1385 1.47124C15.9504 1.4655 13.7829 1.89035 11.7614 2.72119C9.73997 3.55203 7.90461 4.77238 6.36157 6.31161Z" fill="#43AF64" />
                                    <path d="M23.7894 17.8931C25.0975 17.8931 26.1579 16.5036 26.1579 14.7896C26.1579 13.0755 25.0975 11.686 23.7894 11.686C22.4813 11.686 21.4209 13.0755 21.4209 14.7896C21.4209 16.5036 22.4813 17.8931 23.7894 17.8931Z" fill="#43AF64" />
                                    <path d="M11.9993 17.8931C13.3074 17.8931 14.3678 16.5036 14.3678 14.7896C14.3678 13.0755 13.3074 11.686 11.9993 11.686C10.6913 11.686 9.63086 13.0755 9.63086 14.7896C9.63086 16.5036 10.6913 17.8931 11.9993 17.8931Z" fill="#43AF64" />
                                    <path d="M18.1383 27.8545C21.0905 27.8545 23.5957 26.7864 25.5826 24.6813C25.6516 24.611 25.7058 24.5278 25.742 24.4365C25.7782 24.3452 25.7957 24.2477 25.7935 24.1496C25.7912 24.0515 25.7692 23.9549 25.7289 23.8653C25.6885 23.7758 25.6305 23.6951 25.5583 23.6281C25.4861 23.561 25.4012 23.5089 25.3085 23.4749C25.2157 23.4408 25.1171 23.4254 25.0183 23.4296C24.9195 23.4339 24.8226 23.4576 24.7332 23.4995C24.6437 23.5413 24.5636 23.6005 24.4975 23.6735C22.8021 25.4687 20.6634 26.3795 18.1373 26.3795C15.6112 26.3795 13.4735 25.4687 11.7771 23.6735C11.711 23.6005 11.6309 23.5413 11.5414 23.4995C11.452 23.4576 11.3551 23.4339 11.2563 23.4296C11.1575 23.4254 11.0589 23.4408 10.9661 23.4749C10.8734 23.5089 10.7885 23.561 10.7163 23.6281C10.6441 23.6951 10.5861 23.7758 10.5457 23.8653C10.5054 23.9549 10.4834 24.0515 10.4812 24.1496C10.4789 24.2477 10.4964 24.3452 10.5326 24.4365C10.5688 24.5278 10.623 24.611 10.692 24.6813C12.6542 26.7572 15.2277 27.8545 18.1383 27.8545Z" fill="#43AF64" />
                                </svg>
                                <span className='mt-4 text-[#43AF64]'>75%</span>
                            </div>
                            <div onClick={() => setAnswer(5)} className={`${answer === 5 && 'border border-2 border-[#1E88E5]'} w-full bg-[#EBFFE2] cursor-pointer rounded-e-[25px] rounded-s-[10px] flex justify-center items-center flex-col  aspect-square`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 37 36" fill="none">
                                    <path d="M5.31016 30.7226C2.34333 27.7775 0.497442 23.9029 0.0869947 19.7589C-0.323453 15.6149 0.726933 11.4579 3.05919 7.9961C5.39144 4.53435 8.86127 1.98204 12.8775 0.774042C16.8937 -0.433953 21.2078 -0.222896 25.0847 1.37125C28.9617 2.9654 32.1616 5.84402 34.1394 9.51663C36.1171 13.1892 36.7502 17.4286 35.9309 21.5125C35.1116 25.5963 32.8905 29.272 29.646 31.9132C26.4016 34.5544 22.3346 35.9977 18.1379 35.9972C15.7544 36.0035 13.3933 35.5405 11.1914 34.6351C8.98949 33.7297 6.99048 32.3999 5.31016 30.7226ZM6.36102 6.30973C3.63661 9.01311 1.94121 12.5701 1.56368 16.3747C1.18614 20.1794 2.14984 23.9962 4.29056 27.1748C6.43129 30.3535 9.61659 32.6973 13.3037 33.807C16.9909 34.9167 20.9518 34.7235 24.5115 33.2604C28.0712 31.7974 31.0095 29.1549 32.8258 25.7833C34.642 22.4117 35.2239 18.5195 34.4721 14.77C33.7204 11.0204 31.6817 7.6455 28.7032 5.22022C25.7248 2.79494 21.9909 1.46936 18.1379 1.46935C15.9495 1.46321 13.7816 1.88787 11.7598 2.71873C9.73794 3.54959 7.9023 4.77014 6.35913 6.30973H6.36102Z" fill="#1D723F" />
                                    <path d="M23.786 17.8914C25.094 17.8914 26.1544 16.5019 26.1544 14.7879C26.1544 13.0738 25.094 11.6843 23.786 11.6843C22.4779 11.6843 21.4175 13.0738 21.4175 14.7879C21.4175 16.5019 22.4779 17.8914 23.786 17.8914Z" fill="#1D723F" />
                                    <path d="M11.9969 17.8914C13.305 17.8914 14.3654 16.5019 14.3654 14.7879C14.3654 13.0738 13.305 11.6843 11.9969 11.6843C10.6888 11.6843 9.62842 13.0738 9.62842 14.7879C9.62842 16.5019 10.6888 17.8914 11.9969 17.8914Z" fill="#1D723F" />
                                    <path d="M10.3032 22.5066H25.9665V22.9653C25.9665 25.0262 25.1414 27.0027 23.6727 28.4599C22.2039 29.9172 20.2119 30.7359 18.1349 30.7359C16.0578 30.7359 14.0658 29.9172 12.5971 28.4599C11.1283 27.0027 10.3032 25.0262 10.3032 22.9653V22.5066Z" fill="#1D723F" />
                                </svg>
                                <span className='mt-4 text-[#1D723F]'>100%</span>
                            </div>
                        </div>
                        <div className={`${answer ? 'cursor-pointer' : 'cursor-disabled'} bg-[#1E88E5] rounded-full p-3 mt-10  text-white w-max ms-auto`} onClick={() => {
                            if (index == cats?.length - 1) {
                                sendAnswers()
                            } else {
                                selectAnswer()
                            }

                        }} >{index == cats?.length - 1 ? 'Ugrat' : 'Dowam et'}</div>
                        {/* <div className="flex my-10  gap-2 items-center justify-center">
                            <div className='w-8 h-8 rounded-lg  flex items-center justify-center bg-[#F1F9FF] text-[#1E88E5]'>1</div>
                            <div className='w-8 h-8 rounded-lg  flex items-center justify-center bg-[#F5F5F5] text-[#000]'>2</div>
                            <div className='w-8 h-8 rounded-lg  flex items-center justify-center bg-[#F5F5F5] text-[#000]'>3</div>
                            <div className='w-8 h-8 rounded-lg  flex items-center justify-center bg-[#F5F5F5] text-[#000]'>4</div>
                            <div className='w-8 h-8 rounded-lg  flex items-center justify-center bg-[#F5F5F5] text-[#000]'>5</div>

                        </div> */}
                        <div className='w-full h-1.5 mt-20 mb-10 rounded-xl bg-[#E1E1E1] '>
                            <div style={{ width: currentWidth + '%' }} className={` h-1.5 mt-20  mb-5 rounded-xl bg-[#1E88E5]`}></div>
                        </div>
                        <div className='mx-auto text-center my-5 px-2.5 py-2  flex text-sm items-center justify-center w-max rounded-xl bg-[#F5F5F5]'>{index + 1}/ {cats?.length}</div>
                    </div>
                </div>
            }
            {view === 'result' &&
                <div>
                    <div className="container">
                        <div className="w-8/12 mx-auto  ">
                            <div className='font-semibold mt-10 w-2/3    text-2xl '>
                                Siziň beren ballaryňyz boýunça anyklanylan şahsyýet
                            </div>

                            <div className='my-10 flex flex-col gap-3' >
                                {results?.all_enneagram.sort((a, b) => b.percentage - a.percentage).map((result) => {
                                    return (
                                        <div className='rounded-lg flex justify-between items-center p-2.5 font-medium bg-[#F5F5F5]'>
                                            <span>{result?.type}</span>
                                            <span>{result?.percentage}%</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='font-semibold mt-10 w-2/3    text-2xl '>
                                Siziň beren ballaryňyz boýunça anyklanylan şahsyýet
                            </div>
                            <div className='flex flex-col my-10 gap-3 '>
                                {results?.my_speciality?.explanation.split(',').map((segments, index) => {
                                    return (
                                        <div key={index} className='rounded-lg normal-case flex justify-between items-center p-2.5 font-medium bg-[#F5F5F5]' >
                                            {segments}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Enneagram