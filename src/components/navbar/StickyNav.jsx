import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { HashRouter, NavLink, useLocation, useParams } from 'react-router-dom';
import axiosInstance from '../../axios';
import { motion } from 'framer-motion';

import baseUrl from '../../baseUrl';
import SlidingText from './SlidingText';
// import tm from '../../images/tm.png'
// import ru from '../../images/ru.png'
// import en from '../../images/en.png'




function StickyNav() {
    //      const [isSticky, setSticky] = useState(false);
    //   const [prevScrollPos, setPrevScrollPos] = useState(0);
    const navbarRef = useRef(null);
    const { t, i18n } = useTranslation();
    //   useEffect(() => {
    //     const handleScroll = () => {
    //       const currentScrollPos = window.pageYOffset;
    //       const top = navbarRef.current.getBoundingClientRect().top;

    //       if (top <= 0) {
    //         setSticky(true);
    //       } else if (currentScrollPos < prevScrollPos) {
    //         setSticky(false);
    //       }

    //       setPrevScrollPos(currentScrollPos);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, [prevScrollPos]);
    const [isSticky, setSticky] = useState(false);
    const [loading, isLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [Cats, setCats] = useState(null);
    const [data, setData] = useState(null);
    const [datas, setDatas] = useState(null);
    const [lang, showLang] = useState(false);
    const [ids, setCurrentId] = useState(null);
    const [idss, setCurrentIds] = useState(null);

    const { id } = useParams()

    const location = useLocation()

    const onHover = (e) => {
        setData(e.target.value)
    }
    const onUnHover = () => {
        setData(null)
    }
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['en', 'ru', 'tk'];

    const handleSelectChange = (event) => {
        // setSelectedOption(event.target.value);
        i18n.changeLanguage(event)
        getCats()
        showLang(false)
        console.log('language ', event);
    };


    const componentRef = useRef(null);
    const parentRef = useRef(null);

    // Function to handle click outside component
    const handleClickOutside = (event) => {
        if (!event.target.contains(componentRef.current)) {
            // Click occurred outside the component
            // console.log('Clicked outside component');
            // alert('hello')
            showLang(false)
            // Perform actions here, like closing a modal or resetting state
        }
    };



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) { // Change 100 to the scroll position where you want the navbar to become sticky
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        getCats()
        return () => {

            window.removeEventListener('scroll', handleScroll);

        };

    }, []);

    useEffect(() => {
        setCurrentId(null)

        Changeid()
        const pathParts = location.pathname.split('/');

        if (idss && pathParts[1] === 'topic') {
            getMainId()
        }
        if (location.pathname === '/') {
            setCurrentId(null)
        }
        // }
    }, [location.pathname, idss, ids]);

    const getMainId = async () => {
        // if (ids) {
        try {
            const resp = await axiosInstance.get(`${baseUrl}api/main/${idss}`);
            console.log('log response', resp.data);
            setCurrentId(resp?.data?.id)

        } catch (error) {

        }
        // Handle response
        // } else {
        // Handle the case when ids is not defined

        // }
    }
    useEffect(() => {
        // Reset state to null on route change
        setCurrentId(null);
        setCurrentIds(null);
    }, [location]);
    const Changeid = async () => {
        const pathParts = location.pathname.split('/');
        setCurrentId(pathParts[pathParts?.length - 1]);
        setCurrentIds(pathParts[pathParts?.length - 1]);
        console.log('navbar id', ids);
        console.log('location', pathParts[1]);
        // console.log('navbar data', datas);
        if (location.pathname === `/vacansy` || `/faq`) {
            setCurrentId(data?.id)

        }
        if (datas) {
            datas?.children?.forEach(element => {
                console.log('route id', element.id);
                if (element.id == pathParts[pathParts?.length - 1]) {

                    setCurrentId(data?.id)
                    setCurrentIds(element.id)
                }
            });
        }
    }

    const slideVariant = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    const getCats = async () => {
        try {
            isLoading(true)
            const response = await axiosInstance.get(`${baseUrl}api/category/`);
            console.log('response', response.data);
            setCats(response?.data?.data)
            isLoading(false)

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    const [howeredIndex, sethoweredIndex] = useState(null)

    const ContentOnHover = (cat, index) => {
        setIsVisible(true)
        setData(cat)
        sethoweredIndex(index)
        setDatas(cat)
        console.log('data', data);
    }

    const Steaky = () => {
        return (
            <>
                {data?.children?.length > 0 && data?.id !== 4 && (
                    <div onMouseLeave={() => setData()} className={`absolute font-[500] border text-[14px] border-[#E1E1E1] rounded-[1px] w-36 p-2 z-20 shadow-lg  bg-white text-black`}>
                        {/* <div className='flex container gap-3 flex-wrap flex-col'> */}
                        <div className='flex flex-col gap-1.5'>
                            <NavLink className={`cursor-pointer hover:opacity-[50%]`} to={data?.type === 'news' ? '/news' : data?.id === 2 ? `/topic/yaslar/${data?.id}` : `/topics/${data?.id}`}>
                                {data?.label}
                            </NavLink>
                            <hr className='border-t-[#e1e1e1] w-full' />
                            {data?.children?.map((cat, index) => {
                                switch (cat?.type) {
                                    case 'vacancy':
                                        return (
                                            <>
                                                <NavLink to={`/vacansy`} className={`${location.pathname === '/vacansy' ? 'opacity-[50%]' : ''} hover:opacity-[50%]  cursor-pointer  `} key={cat?.id}>
                                                    {cat?.label}
                                                </NavLink>
                                                {index !== data?.children?.length - 1 && <hr className='border-t-[#e1e1e1] w-full' />}
                                            </>
                                        );

                                    case 'faq':
                                        return (
                                            <>
                                                <NavLink to={`/questions`} className={`${location.pathname === '/questions' ? 'opacity-[50%]' : ''} hover:opacity-[50%] cursor-pointer  `} key={cat?.id}>
                                                    {cat?.label}
                                                </NavLink>
                                                {index !== data?.children?.length - 1 && <hr className='border-t-[#e1e1e1] w-full' />}

                                            </>
                                        );

                                    case 'map':
                                        return (
                                            <>
                                                <NavLink to={`/map`} className={`${location.pathname === '/map' ? 'opacity-[50%]' : ''} hover:opacity-[50%] cursor-pointer  `} key={cat?.id}>
                                                    {cat?.label}
                                                </NavLink>
                                                {index !== data?.children?.length - 1 && <hr className='border-t-[#e1e1e1] w-full' />}

                                            </>
                                        );

                                    case 'oportunities':
                                        return (
                                            <>
                                                <NavLink to={`/yaslar`} className={`hover:opacity-[50%] cursor-pointer  `} key={cat?.id}>
                                                    {cat?.label}
                                                </NavLink>
                                                {index !== data?.children?.length - 1 && <hr className='border-t-[#e1e1e1] w-full' />}

                                            </>
                                        );

                                    case 'news':
                                        return (
                                            <>
                                                <NavLink to={`/news/${cat?.id}`} className={`${idss === cat?.id ? 'opacity-[50%]' : ''} hover:opacity-[50%] cursor-pointer  `} key={cat?.id}>
                                                    {cat?.label}
                                                </NavLink>
                                                {index !== data?.children?.length - 1 && <hr className='border-t-[#e1e1e1] w-full' />}

                                            </>
                                        );

                                    case 'standart':
                                        if (cat.posts_count > 1) {
                                            return (
                                                <>
                                                    <NavLink to={`/yaslar`} className='hover:opacity-[50%] cursor-pointer  ' key={cat?.id}>
                                                        {cat?.label}
                                                    </NavLink>
                                                    {index !== data?.children?.length - 1 && <hr className='border-t-[#e1e1e1] w-full' />}

                                                </>
                                            );
                                        } else if (cat.posts_count === 0) {
                                            return (
                                                <>
                                                    <NavLink className='hover:opacity-[50%] cursor-pointer  ' key={cat?.id}>
                                                        {cat?.label}
                                                    </NavLink>
                                                    {index !== data?.children?.length - 1 && <hr className='border-t-[#e1e1e1] w-full' />}

                                                </>
                                            );
                                        } else {
                                            return (
                                                <>
                                                    <NavLink to={`/topics/${cat.id}`} className={`${idss === cat?.id ? 'opacity-[50%]' : ''} hover:opacity-[50%] cursor-pointer  `} key={cat?.id}>
                                                        {cat?.label}
                                                    </NavLink>
                                                    {index !== data?.children?.length - 1 && <hr className='border-t-[#e1e1e1] w-full' />}

                                                </>
                                            );
                                        }

                                    case 'project':
                                        return (
                                            <>
                                                <NavLink to={`/project/${cat.id}`} className={`${idss === cat?.id ? 'opacity-[50%]' : ''} hover:opacity-[50%] cursor-pointer`} key={cat?.id}>
                                                    {cat?.label}
                                                </NavLink>
                                                {index !== data?.children?.length - 1 && <hr className='border-t-[#e1e1e1] w-full' />}

                                            </>
                                        );

                                    default:
                                        return (
                                            <>
                                                <NavLink className='hover:opacity-[50%] cursor-pointer' key={cat?.id}>
                                                    {cat?.label}
                                                </NavLink>
                                                {index !== data?.children?.length - 1 && <hr className='border-t-[#e1e1e1] w-full' />}
                                            </>
                                        );
                                }
                            })}
                        </div>
                        {/* </div> */}
                    </div>
                )}
            </>
        )
    }


    return (
        <>
            <div ref={navbarRef} className={`bg-primaryColor pt-4    navbar  text-white ${isSticky ? 'fixed top-0 w-full z-40 ' : ''}`}>
                <div className='relative'>

                    <div className={` ${isSticky ? ' ' : 'border-t border-t-1'} container h-auto w-[100%] z-20 flex justify-between items-center py-2`}>
                        <motion.div className="links"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideVariant}
                        >
                            {!loading ? (
                                <ul className='flex justify-between items-center group gap-4 font-semibold'>
                                    {Cats?.map((cat, index) => {
                                        switch (cat?.type) {
                                            case 'oportunities':
                                                return (
                                                    <NavLink
                                                        to={`/yaslar`}
                                                        className={`${ids == cat?.id || location.pathname === `/yaslar` ? 'opacity-[50%]' : ''} cursor-pointer hover:opacity-[50%] p-1 font-[500] text-[16px] xl:text-xl`}
                                                        key={cat.id}
                                                        value={cat?.label}
                                                        onMouseEnter={() => ContentOnHover(cat, index)}
                                                    >
                                                        <div>{cat?.label}</div>
                                                    </NavLink>
                                                );

                                            case 'newsletter':
                                                return (
                                                    <NavLink
                                                        to={`/newsletter`}
                                                        className={`${ids == cat?.id || location.pathname === `/newsletter` ? 'opacity-[50%]' : ''} cursor-pointer relative font-[500] text-[16px] hover:opacity-[54%] p-1 xl:text-xl`}
                                                        key={cat.id}
                                                        value={cat?.label}
                                                        onMouseEnter={() => ContentOnHover(cat, index)}
                                                    >
                                                        <div>{cat?.label}</div>
                                                    </NavLink>
                                                );

                                            case 'news':
                                                return (
                                                    <li
                                                        className={` cursor-pointer relative  p-1 xl:text-xl font-[500] text-[16px]`}
                                                        key={cat.id}
                                                        value={cat?.label}
                                                        onMouseEnter={() => ContentOnHover(cat, index)}
                                                    >
                                                        <div className={`${ids == cat?.id || (location.pathname === `/news` && cat?.type === 'news') ? 'opacity-[50%]' : ''} hover:opacity-[50%]`} >{cat?.label}</div>
                                                        {howeredIndex === index && (
                                                            <Steaky />
                                                        )}
                                                    </li>
                                                );

                                            default:
                                                if (cat?.posts_count > 0) {
                                                    return (
                                                        <NavLink
                                                            to={`/topics/${cat?.id}`}
                                                            className={` cursor-pointer font-[500] relative  p-1 text-[16px] xl:text-xl`}
                                                            key={cat.id}
                                                            value={cat?.label}
                                                            onMouseEnter={() => ContentOnHover(cat, index)}
                                                        >
                                                            <div className={`${ids == cat?.id ? 'opacity-[50%]' : ''} hover:opacity-[50%]`} >{cat?.label}</div>
                                                            {howeredIndex === index && (
                                                                <Steaky />
                                                            )}
                                                        </NavLink>
                                                    );
                                                }
                                                return null;
                                        }
                                    })}
                                    <NavLink
                                        to={`/enneagram`}
                                        className={`${location.pathname === '/enneagram' ? 'opacity-[50%]' : ''} cursor-pointer font-[500] hover:opacity-[54%] p-1 text-[16px] xl:text-xl`}
                                    >
                                        {t('test')}
                                    </NavLink>
                                </ul>
                            ) : (
                                <div className='flex items-center justify-between gap-5 w-full'>
                                    <div className='animate-pulse rounded-full bg-slate-200 w-20 h-5'></div>
                                    <div className='animate-pulse rounded-full bg-slate-200 w-20 h-5'></div>
                                    <div className='animate-pulse rounded-full bg-slate-200 w-20 h-5'></div>
                                    <div className='animate-pulse rounded-full bg-slate-200 w-20 h-5'></div>
                                    <div className='animate-pulse rounded-full bg-slate-200 w-20 h-5'></div>
                                </div>
                            )}
                        </motion.div>
                        {/* Language Selector and Other Components */}
                        <div className='flex items-center gap-4'>
                            <div className='relative'>
                                <img className='w-8 cursor-pointer border border-[#E1E1E1] rounded-[1px]' onClick={() => showLang(true)} src={require(`../../images/${i18n.language}.png`)} alt="" />
                                <div ref={componentRef} className={`${lang ? '' : 'hidden'} absolute bg-white py-2 border flex items-center justify-center w-11 border-[#E1E1E1] gap-2 text-black shadow-lg right-0 mt-2 overflow-hidden rounded-[6px] z-30 flex flex-col`}>
                                    {options.filter(option => i18n.language !== option).map((option, index) => (
                                        <React.Fragment key={index}>
                                            <div onClick={() => handleSelectChange(option)} className='mx-auto flex items-center justify-center'>
                                                <img className='w-2/3 mx-auto shadow rounded-[1px] cursor-pointer' src={require(`../../images/${option}.png`)} alt={option} />
                                            </div>
                                            {index === 0 && <hr className='border-t-[#e1e1e1] w-full' />}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                            <div ref={parentRef} onClick={handleClickOutside} className={`fixed ${!lang && 'hidden'} inset-0 bg`}></div>
                        </div>
                    </div>


                </div>
                {/* <div className={`${isVisible ? 'block' : 'hidden'} z-22 absolute top-0 bottom-0 right-0 left-0 h-[100vh] bg-[black] bg-opacity-40`}> */}

                <SlidingText />

            </div>


            <div ref={navbarRef} className={`bg-primaryColor  navbar text-white ${isSticky ? 'block ' : 'hidden'}`}>
                <div className=' container pt-4  h-auto w-[100%] z-20 flex justify-between items-end '>
                    <div className="links">
                        <ul className='flex justify-between items-center gap-4 font-semibold'>
                            <li className='cursor-pointer' >
                                Baş sahypa
                            </li>
                            <li className='cursor-pointer'>
                                Ýaşlar Syýasaty
                            </li>
                            <li className='cursor-pointer'>
                                Habarlar
                            </li>
                            <li className='cursor-pointer'>
                                Mümkinçilikler
                            </li >
                            <li className='cursor-pointer'>
                                Kitaphana
                            </li>
                            <li className='cursor-pointer'>
                                Medeniýet
                            </li>
                            <li className='cursor-pointer'>
                                Sport
                            </li>
                        </ul>
                    </div>
                    <div className='flex  items-center gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M19.1229 17.8666L18.4955 18.494C20.5272 16.4622 21.6686 13.7066 21.6686 10.8333C21.6686 7.96002 20.5272 5.2044 18.4955 3.17263C17.4906 2.16531 16.2967 1.36649 14.9821 0.822027C13.6676 0.277568 12.2583 -0.00179428 10.8355 9.92197e-06C9.41238 -0.00191882 8.00297 0.27737 6.68814 0.82183C5.37331 1.36629 4.179 2.16519 3.17388 3.17263C2.16763 4.17869 1.36946 5.37313 0.824874 6.6877C0.28029 8.00226 0 9.41122 0 10.8341C0 12.257 0.28029 13.666 0.824874 14.9806C1.36946 16.2951 2.16763 17.4896 3.17388 18.4956C4.179 19.5031 5.37331 20.302 6.68814 20.8464C8.00297 21.3909 9.41238 21.6702 10.8355 21.6682C12.2583 21.67 13.6676 21.3907 14.9821 20.8462C16.2967 20.3018 17.4906 19.5029 18.4955 18.4956L17.8681 19.1246L22.7435 24L24 22.7419L19.1229 17.8666ZM17.2375 17.2376C16.3985 18.0811 15.4005 18.7498 14.3014 19.205C13.2022 19.6602 12.0236 19.8929 10.8339 19.8895C9.64418 19.893 8.46559 19.6605 7.36639 19.2053C6.26719 18.75 5.2692 18.0812 4.43033 17.2376C3.58659 16.3987 2.91764 15.4008 2.46215 14.3016C2.00666 13.2025 1.77365 12.0239 1.77671 10.8341C1.77365 9.64434 2.00666 8.46576 2.46215 7.3666C2.91764 6.26745 3.58659 5.26956 4.43033 4.43068C5.2692 3.58702 6.26719 2.91822 7.36639 2.463C8.46559 2.00779 9.64418 1.7752 10.8339 1.77874C12.0236 1.77538 13.2022 2.00803 14.3014 2.46324C15.4005 2.91845 16.3985 3.58717 17.2375 4.43068C18.0807 5.26986 18.7492 6.26785 19.2044 7.36696C19.6596 8.46607 19.8925 9.64449 19.8894 10.8341C19.8925 12.0238 19.6596 13.2022 19.2044 14.3013C18.7492 15.4004 18.0807 16.3984 17.2375 17.2376Z" fill="white" />
                        </svg>
                        <button className='text-lg rounded font-semibold rounded-none text-primaryColor bg-white px-4 py-1'>Giriş</button>
                    </div>
                </div>
                <SlidingText />

            </div>
        </>
    )
}

export default StickyNav