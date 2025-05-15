const yeosu_city_data = [
    { city: "여수시", district: "돌산읍", value1: 74, value2: 63 },
    { city: "여수시", district: "소라면", value1: 72, value2: 66 },
    { city: "여수시", district: "율촌면", value1: 71, value2: 68 },
    { city: "여수시", district: "화양면", value1: 72, value2: 65 },
    { city: "여수시", district: "남면", value1: 75, value2: 60 },
    { city: "여수시", district: "화정면", value1: 73, value2: 63 },
    { city: "여수시", district: "삼산면", value1: 67, value2: 50 },
    { city: "여수시", district: "동문동", value1: 74, value2: 65 },
    { city: "여수시", district: "한려동", value1: 74, value2: 65 },
    { city: "여수시", district: "중앙동", value1: 74, value2: 65 },
    { city: "여수시", district: "충무동", value1: 74, value2: 66 },
    { city: "여수시", district: "광림동", value1: 74, value2: 66 },
    { city: "여수시", district: "서강동", value1: 74, value2: 65 },
    { city: "여수시", district: "대교동", value1: 74, value2: 65 },
    { city: "여수시", district: "국동", value1: 74, value2: 65 },
    { city: "여수시", district: "월호동", value1: 74, value2: 65 },
    { city: "여수시", district: "여서동", value1: 74, value2: 66 },
    { city: "여수시", district: "문수동", value1: 74, value2: 66 },
    { city: "여수시", district: "미평동", value1: 74, value2: 66 },
    { city: "여수시", district: "둔덕동", value1: 73, value2: 66 },
    { city: "여수시", district: "만덕동", value1: 74, value2: 66 },
    { city: "여수시", district: "쌍봉동", value1: 73, value2: 66 },
    { city: "여수시", district: "시전동", value1: 73, value2: 66 },
    { city: "여수시", district: "여천동", value1: 73, value2: 66 },
    { city: "여수시", district: "주삼동", value1: 73, value2: 66 },
    { city: "여수시", district: "삼일동", value1: 73, value2: 67 },
    { city: "여수시", district: "묘도동", value1: 74, value2: 68 }
  ];
  let xny = 'nx=74&ny=63';
  
const odongdo_item = [
    '오동도/thumb-2041829860_ebRzfSHc_c172efc7f785eb5f52e5fc5c1ff7e3c814e9291e_1280x854.jpg',
    '오동도/odong2.jpg',
    '오동도/odong3.jpeg',
    '오동도/yeosu_city_223768298075_0.jpg',
    '오동도/221D183557CB5B242B.png'    
];
const Arts_Land_item = [
    '예술/4408adc1-3fa1-4897-86c8-2733ccd698c9.webp',
    '예술/014A6499-1.jpg',
    '예술/106835_60804_4735.jpg',
    '예술/3422960_image2_1.png',
    '예술/16264045192388.png'
]
const Hyangiram_item = [
    '향일암/04.jpg',
    '향일암/05.jpg',
    '향일암/06.jpg',
    '향일암/07.jpg',
    '향일암/10.jpg'
]
const Dolsan_Park = [
    '돌산공원/DSC_7568.jpg',
    '돌산공원/20190813_204906.webp',
    '돌산공원/DSC_7631.jpg',
    '돌산공원/sdaaf.webp',
    '돌산공원/DSC_7658.jpg'
]
const Aquaplane_item = [
    '아쿠아/unnamed2.jpg',
    '아쿠아/un4.jpg',
    '아쿠아/unnamed.jpg',
    '아쿠아/unnamed1.jpg',
    '아쿠아/unnamed3.jpg'
]
const slider = document.querySelector('.tourist_slider');
let startX = 0;
let slider_posi = 0;

let sl;

let scrollPosition = 0;  

window.addEventListener('DOMContentLoaded', ()=> {

    let mou = false;
    document.querySelector('.random_tourist_content').addEventListener('mouseenter',()=>{
        mou = true;
    });
    document.querySelector('.random_tourist_content').addEventListener('mouseleave',()=>{
        mou = false;
    });

    data();

    document.querySelectorAll('.city_data').forEach((item, index)=> {
        item.textContent = yeosu_city_data[index].district;
    })

    scrollPosition = 0;
    window.scrollTo({
        top: scrollPosition
    });

    const max_scroll = window.innerHeight * 12;

    let scroll_tufa = true;
    window.addEventListener('wheel', (event)=> {

        if (window.scrollY < window.innerHeight) {
            document.querySelector('.html').style.overflow = 'auto';
            document.querySelector('.html').style.overflowX = 'hidden';
            return;
        } else {
            document.querySelector('.html').style.overflow = 'hidden';
            if(mou === false) {
                if (event.deltaY > 0 && scrollPosition < max_scroll && scroll_tufa === true) { 
                    scrollPosition += window.innerHeight; 
                    window.scrollTo({
                        top: scrollPosition
                    });
                    scroll_tufa = false;
                    setTimeout(()=>{
                        scroll_tufa = true;
                    }, 500);
                }
                
                if (event.deltaY < 0 && scrollPosition > 0 && scroll_tufa === true) {
                    scrollPosition -= window.innerHeight;
                    if (scrollPosition < 0) {
                        scrollPosition = 0;
                    }
                    window.scrollTo({
                        top: scrollPosition
                    });
                    scroll_tufa = false;
                    setTimeout(()=>{
                        scroll_tufa = true;
                    }, 500);
                }
            }
        }
    });
    
    

    const banners = document.querySelectorAll('.acti_banner');

    banners.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            banners.forEach((el) => {
                el.style.width = 'calc(10% - 10px)';
                el.querySelector('.acti_text').style.rotate = '90deg';
                el.querySelector('.acti_text').style.fontSize = '30px';
            });
            item.style.width = 'calc(80% - 10px)';
            item.querySelector('.acti_text').style.rotate = '0deg';
            item.querySelector('.acti_text').style.fontSize = '50px';
        });
    });
    
    


    const video = document.getElementById('video');
    video.addEventListener('ended', ()=> {
        video.currentTime = 0;
        video.play(); 
    })
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY; 
        const vh = window.innerHeight;
        const twoVh = vh * 2;
        const treVh = vh * 3;
        const Vh4 = vh * 4;
        const Vh5 = vh * 5;
        const Vh6 = vh * 6;
        const Vh7 = vh * 7;
        const Vh8 = vh * 8;
        const Vh9 = vh * 9;
        const Vh10 = vh * 10;
        const Vh11 = vh * 11;

        if(scrollY < vh) {
            document.querySelector('.content_container').style.position = 'sticky';
        } else {
            document.querySelector('.content_container').style.position = 'static';
        }

        if (scrollY >= Vh10 && scrollY < Vh11) {
            document.querySelector('.logo_text').style.color = 'white';
            document.querySelector('.login').style.border = '2px solid white';
            document.querySelector('.login').style.color = 'white';
            document.querySelector('.sign').style.backgroundColor = 'white';
             document.querySelector('.sign').style.color = '#0080FF';
        } else if(scrollY >= Vh4 && scrollY < Vh8) {
            document.querySelector('.login').style.color = '#ffef94';
            document.querySelector('.login').style.border = '2px solid #ffef94';

            document.querySelector('.sign').style.backgroundColor = '#ffef94';
            document.querySelector('.sign').style.color = '#0b132b';
            document.querySelector('.logo_text').style.color = '#ffef94';
        }
         else {
            document.querySelector('.logo_text').style.color = '#0080FF';
            document.querySelector('.login').style.border = '2px solid #0080FF';
            document.querySelector('.login').style.color = '#0080FF';
            document.querySelector('.sign').style.backgroundColor = '#0080FF';
             document.querySelector('.sign').style.color = 'white';
        }

        if(scrollY > Vh11) {
            document.querySelector('.real_header').style.opacity = '0';
            document.querySelector('.real_header').style.pointerEvents = 'none';

            document.querySelector('.random_tourist_body').style.opacity = '0';
            document.querySelector('.random_tourist_body').style.pointerEvents = 'none';

            document.querySelector('.random_tourist_header').style.opacity = '0';
            document.querySelector('.random_tourist_header').style.pointerEvents = 'none';
        } else {
            document.querySelector('.real_header').style.opacity = '1';
            document.querySelector('.real_header').style.pointerEvents = 'all';

            document.querySelector('.random_tourist_body').style.opacity = '1';
            document.querySelector('.random_tourist_body').style.pointerEvents = 'all';
            
            document.querySelector('.random_tourist_header').style.opacity = '1';
            document.querySelector('.random_tourist_header').style.pointerEvents = 'all';
        }

        if (scrollY >= Vh9 && scrollY < Vh10) {
            document.querySelectorAll('.header_a').forEach(item=> {
                item.addEventListener('mouseenter',event=> {
                    event.target.style.setProperty('--col', 'black');
                })
            })
        } else {
            document.querySelectorAll('.header_a').forEach(item=> {
                item.addEventListener('mouseenter',event=> {
                    event.target.style.setProperty('--col', '#0080FF');
                })
            })
        }

        if(scrollY >= Vh6) {
            document.getElementById('food_container_text1').style.opacity = '0';
        } else if(scrollY >= Vh8) {
            document.getElementById('food_container_text2').style.opacity = '0';
        } else {
            document.querySelectorAll('.food_container_text').forEach(item=>{
                item.style.opacity = '1';
            })
        }

        if(scrollY >= Vh4 && scrollY < Vh8) {
            document.querySelector('.footer_banner').style.opacity = '1';
        } else {
            document.querySelector('.footer_banner').style.opacity = '0';
        }
        if (scrollY >= Vh11) {
            document.querySelectorAll('.header_a').forEach((item) => {
                item.style.color = 'black';
            });
            document.querySelector('.none_back_only_text').style.position = 'static';
        }else if (scrollY >= Vh10) {
            document.querySelectorAll('.header_a').forEach((item) => {
                item.style.color = 'white';
            });
            document.querySelector('.none_back_only_text').style.position = 'static';
        }else if (scrollY >= Vh9) {
            document.querySelectorAll('.header_a').forEach((item,index) => {
                item.style.color = 'black';
                if(index === 3) {
                    item.style.color = '#0080FF';
                }
            });
            document.querySelector('.none_back_only_text').style.position = 'static';
        }else if (scrollY >= Vh8) {
            document.querySelectorAll('.header_a').forEach((item, index) => {
                item.style.color = 'black';
                if(index === 2) {
                    item.style.color = '#0080FF';
                }
            });
            document.querySelector('.none_back_only_text').style.position = 'static';
        } else if (scrollY >= Vh7) {
            document.querySelectorAll('.header_a').forEach((item, index) => {
                item.style.color = '#ffef94';
                if(index === 1) {
                    item.style.color = 'white';
                }
            });
            document.querySelector('.none_back_only_text').style.position = 'static';
        }else if (scrollY >= Vh6) {
            document.querySelectorAll('.header_a').forEach((item, index) => {
                item.style.color = '#ffef94';
                if(index === 1) {
                    item.style.color = 'white';
                }
            });
        } else if (scrollY >= Vh5) {
            document.querySelectorAll('.header_a').forEach((item, index) => {
                item.style.color = '#ffef94';
                if(index === 1) {
                    item.style.color = 'white';
                }
            });
        } else if (scrollY >= Vh4) {
            document.querySelectorAll('.header_a').forEach((item, index) => {
                item.style.color = '#ffef94';
                if(index === 1) {
                    item.style.color = 'white';
                }
            });
        } else if (scrollY >= treVh) {
            document.querySelector('.footer_banner').style.position = 'fixed';
            document.querySelectorAll('.header_a').forEach((item, index) => {
                item.style.color = 'white';
            });
            footer_banner_box.style.position = '';
            document.querySelector('.none_back_only_text').style.position = 'static';

            document.querySelectorAll('.food_container').forEach(item=>{
                item.style.position = 'sticky';
            })
            document.querySelectorAll('.food_container_text').forEach(item=>{
                item.style.position = 'fixed';
            })
        } else if (scrollY >= twoVh) {
            document.querySelectorAll('.header_a').forEach((item,index) => {
                item.style.color = 'black';
                if(index === 0) {
                    item.style.color = '#0080FF';
                }
            });
            document.querySelector('.none_back_only_text').style.position = 'sticky';

            document.querySelectorAll('.food_container').forEach(item=>{
                item.style.position = 'sticky';
            })
            document.querySelectorAll('.food_container_text').forEach(item=>{
                item.style.position = 'sticky';
            })
        } else if (scrollY >= vh) {
            document.querySelectorAll('.header_a').forEach((item, index) => {
                item.style.color = 'white';
            });
            document.querySelector('.none_back_only_text').style.position = 'sticky';

            document.querySelectorAll('.food_container').forEach(item=>{
                item.style.position = 'sticky';
            })
            document.querySelectorAll('.food_container_text').forEach(item=>{
                item.style.position = 'sticky';
            })
        } else {
            document.querySelector('.logo_text').style.color = '#0080FF';
            document.querySelector('.login').style.border = '2px solid #0080FF';
            document.querySelector('.login').style.color = '#0080FF';
            document.querySelector('.sign').style.backgroundColor = '#0080FF';
            document.querySelector('.sign').style.color = 'white';
            document.querySelectorAll('.header_a').forEach(item => {
                item.style.color = 'white';
            });
            document.querySelector('.none_back_only_text').style.position = 'sticky';

            document.querySelectorAll('.food_container').forEach(item=>{
                item.style.position = 'sticky';
            })
            document.querySelectorAll('.food_container_text').forEach(item=>{
                item.style.position = 'sticky';
            })
        }
    });

    document.querySelectorAll('.slide').forEach((slide, index)=>{
        slide.style.backgroundImage = `url(image/${odongdo_item[index]})`;
    })

    slider.addEventListener('mousedown', (e) => {
        startX = e.clientX;
    });

    slider.addEventListener('mouseup', (e) => {
        const endX = e.clientX; 
        const deltaX = endX - startX;

        if (deltaX > 0) {
            if (slider_posi < 0) {
                slider_posi += 1280;
            } else {
                slider_posi = -5120;
            }
            if (slider_posi > 1280) {
                slider_posi = 1280;
            }
        } 

        else if (deltaX < 0) {
            if (slider_posi > -5120) { 
                slider_posi -= 1280; 
            } else {
                slider_posi = 0;
            }

            if (slider_posi < -5120) {
                slider_posi = -5120; 
            }
        }

        slider.style.transform = `translateX(${slider_posi}px)`;

        clearInterval(sl);
    setTimeout(()=>{
        btn_update();
    }, 3000);
    btn()
    });

    let count1 = 0;
    let count2 = 0

    const text1 = document.querySelector('.footer_banner1');
    const text2 = document.querySelector('.footer_banner2');

    function set(count, box, leri) {
        if(count > box.scrollWidth / 2) {
            box.style.transform = `translateX(0px)`;
            return 0;
        } else {
            box.style.transform = `translateX(${leri * count}px)`;
            return count
        }
    }

    function ani() {
        count1++;
        count2++;

        count1 = set(count1, text1, -1);
        count2 = set(count2, text2, 1);

        window.requestAnimationFrame(ani);
    }

    function src() {
        count1 += 10;
        count2 += 10;
    }

    window.addEventListener('scroll', src);

    ani();
})
function slider1() {
    slider_posi = 0;
        slider.style.transform = `translateX(${slider_posi}px)`;
    if(!document.getElementById('noim1').checked) {
        document.querySelectorAll('.slide').forEach((slide, index)=>{
            slide.style.backgroundImage = `url(image/${odongdo_item[index]})`;
        })
    }
    clearInterval(sl);
    setTimeout(()=>{
        btn_update();
    }, 3000);
    btn()
}
function slider2() {
    slider_posi = 0;
        slider.style.transform = `translateX(${slider_posi}px)`;
    if(!document.getElementById('noim2').checked) {
        document.querySelectorAll('.slide').forEach((slide, index)=>{
            slide.style.backgroundImage = `url(image/${Arts_Land_item[index]})`;
        })
    }
    clearInterval(sl);
    setTimeout(()=>{
        btn_update();
    }, 3000);
    btn()
}
function slider3() {
    slider_posi = 0;
        slider.style.transform = `translateX(${slider_posi}px)`;
    if(!document.getElementById('noim3').checked) {
        document.querySelectorAll('.slide').forEach((slide, index)=>{
            slide.style.backgroundImage = `url(image/${Hyangiram_item[index]})`;
        })
    }
    clearInterval(sl);
    setTimeout(()=>{
        btn_update();
    }, 3000);
    btn()
}
function slider4() {
    slider_posi = 0;
        slider.style.transform = `translateX(${slider_posi}px)`;
    if(!document.getElementById('noim4').checked) {
        document.querySelectorAll('.slide').forEach((slide, index)=>{
            slide.style.backgroundImage = `url(image/${Dolsan_Park[index]})`;
        })
    }
    clearInterval(sl);
    setTimeout(()=>{
        btn_update();
    }, 3000);
    btn()
}
function slider5() {
    slider_posi = 0;
        slider.style.transform = `translateX(${slider_posi}px)`;
    if(!document.getElementById('noim5').checked) {
        document.querySelectorAll('.slide').forEach((slide, index)=>{
            slide.style.backgroundImage = `url(image/${Aquaplane_item[index]})`;
        })
    }
    clearInterval(sl);
    setTimeout(()=>{
        btn_update();
    }, 3000);
    btn()
}
function left_slide() {
    if(slider_posi < 0) {
        slider_posi += 1280;
        slider.style.transform = `translateX(${slider_posi}px)`;
    } else {
        slider_posi = -5120;
        slider.style.transform = `translateX(${slider_posi}px)`;
    }
    clearInterval(sl);
    setTimeout(()=>{
        btn_update();
    }, 3000);
    btn()
}
function right_slide() {
    if(slider_posi > -5120) {
        slider_posi -= 1280;
        slider.style.transform = `translateX(${slider_posi}px)`;
    } else {
        slider_posi = 0;
        slider.style.transform = `translateX(${slider_posi}px)`;
    }
    clearInterval(sl);
    setTimeout(()=>{
        btn_update();
    }, 3000);
    btn()
}

function auto() {
    slider_posi -= 1280;
    slider.style.transform = `translateX(${slider_posi}px)`;
    if(slider_posi < -5120) {
        slider_posi = 0;
        slider.style.transform = `translateX(${slider_posi}px)`;
    }
    btn()
}
btn()
function btn_update() {
    clearInterval(sl);
    sl = setInterval(auto, 3000);
}

sl = setInterval(auto, 3000);

function btn() {
    if(slider_posi === 0) {
        document.querySelector('.sl_bt1').style.backgroundColor = '#0080FF';
        document.querySelector('.sl_bt1').style.color = 'white';
    } else {
        document.querySelector('.sl_bt1').style.backgroundColor = 'transparent';
        document.querySelector('.sl_bt1').style.color = 'black';
    }
    
    if(slider_posi === -1280) {
        document.querySelector('.sl_bt2').style.backgroundColor = '#0080FF';
        document.querySelector('.sl_bt2').style.color = 'white';
    } else {
        document.querySelector('.sl_bt2').style.backgroundColor = 'transparent';
        document.querySelector('.sl_bt2').style.color = 'black';
    }

    if(slider_posi === -2560) {
        document.querySelector('.sl_bt3').style.backgroundColor = '#0080FF';
        document.querySelector('.sl_bt3').style.color = 'white';
    } else {
        document.querySelector('.sl_bt3').style.backgroundColor = 'transparent';
        document.querySelector('.sl_bt3').style.color = 'black';
    }

    if(slider_posi === -3840) {
        document.querySelector('.sl_bt4').style.backgroundColor = '#0080FF';
        document.querySelector('.sl_bt4').style.color = 'white';
    } else {
        document.querySelector('.sl_bt4').style.backgroundColor = 'transparent';
        document.querySelector('.sl_bt4').style.color = 'black';
    }

    if(slider_posi === -5120) {
        document.querySelector('.sl_bt5').style.backgroundColor = '#0080FF';
        document.querySelector('.sl_bt5').style.color = 'white';
    } else {
        document.querySelector('.sl_bt5').style.backgroundColor = 'transparent';
        document.querySelector('.sl_bt5').style.color = 'black';
    }
}
function sl_bt1() {
    slider_posi = 0;
    slider.style.transform = `translateX(${slider_posi}px)`;
    btn();
    btn_update();
}
function sl_bt2() {
    slider_posi = -1280;
    slider.style.transform = `translateX(${slider_posi}px)`;
    btn();
    btn_update();
}
function sl_bt3() {
    slider_posi = -2560;
    slider.style.transform = `translateX(${slider_posi}px)`;
    btn();
    btn_update();
}
function sl_bt4() {
    slider_posi = -3840;
    slider.style.transform = `translateX(${slider_posi}px)`;
    btn();
    btn_update();
}
function sl_bt5() {
    slider_posi = -5120;
    slider.style.transform = `translateX(${slider_posi}px)`;
    btn();
    btn_update();
}

function a_tage1() {
    scrollPosition = window.innerHeight * 2;
    window.scrollTo({
        top: scrollPosition
    });
}
function a_tage2() {
    scrollPosition = window.innerHeight * 4;
    window.scrollTo({
        top: scrollPosition
    });
}
function a_tage3() {
    scrollPosition = window.innerHeight * 8;
    window.scrollTo({
        top: scrollPosition
    });
}
function a_tage4() {
    scrollPosition = window.innerHeight * 9;
    window.scrollTo({
        top: scrollPosition
    });
}
function home() {
    scrollPosition = 0;
    window.scrollTo({
        top: scrollPosition
    });
}

const selectElement = document.querySelector('.city_select');

document.querySelectorAll('.city_data').forEach((item, index) => {
    item.textContent = yeosu_city_data[index].district;
    item.value = index;
});

let timer;
selectElement.addEventListener('change', () => {
    clearInterval(timer);

    timer = setInterval(() => {
        data();
    }, 1000);

    setTimeout(() => {
        clearInterval(timer);
        timer = setInterval(() => {
            data();
        }, 60000);
    }, 1000);


    document.querySelector('.inspection_container2').style.opacity = '1';
    document.querySelector('.inspection_container2').style.pointerEvents = 'all';
    setTimeout(()=>{
        document.querySelector('.inspection_container2').style.opacity = '0';
        document.querySelector('.inspection_container2').style.pointerEvents = 'none';
    }, 2000);

    const selectedIndex = selectElement.selectedIndex;
    xny = `nx=${yeosu_city_data[selectedIndex].value1}&ny=${yeosu_city_data[selectedIndex].value2}`;
});


function inspection() {
    const doo = document.querySelector('.now_c').innerHTML;
    const now_time = new Date();
    const minutes_time = String(now_time.getMinutes()).padStart(2, '0');
    if(minutes_time < 10 && doo === 'Loading...') {
        document.querySelector('.inspection_container1').style.opacity = '1';
        document.querySelector('.inspection_container1').style.pointerEvents = 'all';
    } else if(doo === 'Loading...') {
        document.querySelector('.inspection_container1').style.opacity = '1';
        document.querySelector('.inspection_container1').style.pointerEvents = 'all';
    } else {
        document.querySelector('.inspection_container1').style.opacity = '0';
        document.querySelector('.inspection_container1').style.pointerEvents = 'none';
    }
}
setInterval(inspection,1000);

function time() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const year = now.getFullYear();         
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
  
    const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=ZN5WGEIR6RyBLmDtW55wpvHHSX%2FrvN4wxkMwfs2U9kPGADbga%2FDxAV1E6l5xnzgSJrzOpc6fIXHq%2B2ArmG4w8Q%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${year}${month}${day}&base_time=${hours}${minutes}&${xny}`;
    return url;
}
let not_wea_img;

let today_wea_text;
function today_wea_text_fu() {
    if(not_wea_img > 0 && not_wea_img < 40) {
        today_wea_text = 'Clear';
    } else if(not_wea_img >= 40 && not_wea_img < 60) {
        today_wea_text = 'Partly Cloudy';
    } else {
        today_wea_text = 'Cloudy';
    }
    return today_wea_text;
}
let mess;
function mes() {
    const mese = document.querySelector('.pre_text').innerHTML;
    if(mese === 'No<br>Precipitation') {
        mess = 'No umbrella needed';
    } else if(mese === 'Raining' || mese === 'Rain<br>and<br>Snow' || mese === 'Snow<br>and<br>Rain' || mese === 'Snowing') {
        mess = 'Umbrella needed';
    } else if(mese === 'Loading...') {
        mess = 'Loading...';
    }
    return mess;
}

let rain_im;
let rain_swi = 0;

let not_wea_nowimg;
function now_img() {
    if(not_wea_img > 0 && not_wea_img < 40) {
        not_wea_nowimg = 'icon_flat_wt1.svg';
    } else if(not_wea_img >= 40 && not_wea_img < 60) {
        not_wea_nowimg = 'icon_flat_wt5.svg';
    } else {
        not_wea_nowimg = 'icon_flat_wt7.svg';
    }
    return not_wea_nowimg;
}
timer = setInterval(() => {
    data();
}, 60000);
function data() {
    const url = time();
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const items = data.response.body.items.item;

        items.forEach(item => {
          if(item.category === 'PTY') {
            if(item.obsrValue == 1) {
                rain_swi = 1;  
            } else {
                rain_swi = 0;
            }
            document.querySelector('.pre_text').innerHTML = rain(item.obsrValue);
            document.querySelector('.wea_font_box_text').innerHTML = mes();
          } else if(item.category === 'REH') {
            not_wea_img = item.obsrValue;
            if(rain_swi == 1) {
                document.querySelector('.not_wea_img').src = `image/weather/icon_flat_wt9.svg`;
                document.querySelector('.today_wea_text').textContent = 'Raining';
            } else {
                document.querySelector('.not_wea_img').src = `image/weather/${now_img()}`;
                document.querySelector('.today_wea_text').textContent = today_wea_text_fu();
            }
          } else if(item.category === 'RN1') {
            console.log(`1시간 강수량(RN1): ${item.obsrValue}mm`);
          } else if(item.category === 'T1H') {
            document.querySelector('.now_c').innerHTML = `${item.obsrValue}°C`;
          } else if(item.category === 'UUU') {
            document.querySelector('.east_west_wind_text').innerHTML = item.obsrValue+'m/s';
          } else if(item.category === 'VEC') {
            document.querySelector('.wind_direction_text1').innerHTML = getDirection(item.obsrValue);
          } else if(item.category === 'VVV') {
            document.querySelector('.north_south_wind_text').innerHTML = item.obsrValue+'m/s';
          } else if(item.category === 'WSD') {
            document.querySelector('.wind_direction_text2').innerHTML = '<br>'+item.obsrValue+'m/s';
          }
        });
      })
      .catch(error => {
        console.error("데이터 불러오기 실패:", error);
      });
}
function getDirection(degree) {
    if (degree >= 0 && degree < 45) return 'North Wind';
    if (degree >= 45 && degree < 90) return 'Northeast Wind';
    if (degree >= 90 && degree < 135) return 'East Wind';
    if (degree >= 135 && degree < 180) return 'Southeast Wind';
    if (degree >= 180 && degree < 225) return 'South Wind';
    if (degree >= 225 && degree < 270) return 'Southwest Wind';
    if (degree >= 270 && degree < 315) return 'West Wind';
    if (degree >= 315 && degree <= 360) return 'Northwest Wind';    
    return 'No Data';
}
function rain(rain_data) {
    if(rain_data == 0) return 'No<br>Precipitation';
    if(rain_data == 1) return 'Raining';
    if(rain_data == 2) return 'Rain<br>and<br>Snow';
    if(rain_data == 3) return 'Snow<br>and<br>Rain';
    if(rain_data == 4) return 'Snowing';
    return 'No Data';
}

function inspection_ani() {
    ani = document.querySelectorAll('.inspection_ani');
    ani.forEach(anii=> {
        if(anii.innerHTML === 'Loading') {
            anii.innerHTML = 'Loading.';
        } else if(anii.innerHTML === 'Loading.') {
            anii.innerHTML = 'Loading..';
        } else if(anii.innerHTML === 'Loading..') {
            anii.innerHTML = 'Loading...';
        } else if(anii.innerHTML === 'Loading...') {
            anii.innerHTML = 'Loading';
        }
    })
}
setInterval(inspection_ani, 300);

const random_list = [
    {
        name: 'odongdo',
        img: '오동도/thumb-2041829860_ebRzfSHc_c172efc7f785eb5f52e5fc5c1ff7e3c814e9291e_1280x854.jpg'
    },
    {
        name: 'yeosu arts land',
        img: '예술/014A6499-1.jpg'
    },
    {
        name: 'hyangiram',
        img: '향일암/05.jpg'
    },
    {
        name: 'dolsan',
        img: '돌산공원/DSC_7568.jpg'
    },
    {
        name: 'aquaplanet',
        img: '아쿠아/unnamed2.jpg'
    },
    {
        name: 'marine cable car',
        img: 'acti/e80ba857-cf73-4ac4-8fd6-cf415a6a5f9d.bmp'
    },
    {
        name: 'laserarena',
        img: 'acti/17055452399734.jpg'
    },
    {
        name: 'marine rail bike',
        img: 'acti/unnamed.jpg'
    },
    {
        name: 'yi sunsin square',
        img: 'other/DSC_2042.JPG'
    },
    {
        name: 'romantic pocha',
        img: 'food/food9.jpeg'
    },
]
window.addEventListener('DOMContentLoaded',()=>{    

    document.querySelector('.random_tourist_ani_box').addEventListener('click', ()=>{
        document.querySelector('.random_tourist_ani_box').style.display = 'none';
    })

    document.querySelectorAll('.item').forEach((item, index)=>{
        item.addEventListener('dragstart', event=>{
            event.dataTransfer.setData('item', event.target.querySelector('.item_name').innerText);
        })

        item.querySelector('.item_name').textContent = random_list[index].name;
        item.querySelector('.item_img').src = 'image/'+random_list[index].img;
    })

    document.querySelector('.random_tourist_list_cart').addEventListener('dragstart', event =>{
        if(event.target.classList.contains('card_list')) {
            event.dataTransfer.setData('remo', event.target.querySelector('.item_nname').innerText);
        }
    })
})

function over(event) {
    event.preventDefault();
}
function drop(event) {
    event.preventDefault();

    const item = event.dataTransfer.getData('item');

    const cart = document.querySelector('.random_tourist_list_cart');

    random_list.forEach(list=>{
        let swi = 0;
        document.querySelectorAll('.item_nname').forEach(itemname => {
            if(itemname.innerText === item) {
                swi = 1;
            }
        })

        if(list.name === item && swi === 0) {
            const new_item = document.createElement('div');
            new_item.classList.add('card_list');
            cart.appendChild(new_item);
            new_item.draggable = true;

            new_item.innerHTML = `
            <img src="image/${list.img}" alt="">
            <p class="item_nname">${list.name}</p>
            `;
        } 
    })

}
document.querySelector('.random_tourist_list_cart').addEventListener('dragover', over)
document.querySelector('.random_tourist_list_cart').addEventListener('drop', drop)

function over1(event) {
    event.preventDefault();
}
function drop1(event) {
    event.preventDefault();

    const remo = event.dataTransfer.getData('remo');
    document.querySelectorAll('.item_nname').forEach(item=>{
        if(item.innerText === remo) {
            item.parentElement.remove();
        }
    })
}

document.querySelector('.random_tourist_show_content').addEventListener('dragover', over1)
document.querySelector('.random_tourist_show_content').addEventListener('drop', drop1)

let rani;
let currentIndex = 0;
let hap;

document.addEventListener('click', event=>{
    if(event.target.classList.contains('ram_imgg')) {
        document.querySelectorAll('.card_list').forEach(item=>{
            item.remove();
        })
        document.querySelector('.random_rist_box').style.opacity = '0';
        document.querySelector('.random_rist_box').style.pointerEvents = 'none';
    }
})

function start() {
    const pare_box = document.querySelector('.random_rist_container');
    const card_list = document.querySelectorAll('.card_list');
    
    if (card_list.length >= 2) {
        currentIndex = 0;
        
        document.querySelector('.random_rist_box').style.opacity = '1';
        document.querySelector('.random_rist_box').style.pointerEvents = 'all';

        setTimeout(() => {
            document.querySelector('.random_rist_container').style.opacity = '0';
            document.querySelector('.random_rist_container').style.pointerEvents = '0';
            document.querySelector('.random_rist_container').style.transition = '0.5s';
        }, 4000);

        setTimeout(() => {
            document.querySelector('.random_rist_container').style.opacity = '1';
            document.querySelector('.random_rist_container').style.pointerEvents = '1';
            document.querySelector('.random_rist_container').style.transition = '0.5s';
        }, 5000);

        pare_box.innerHTML = '';

        for (let i = 0; i < card_list.length; i++) {
            const new_rist_item = document.createElement('div');
            new_rist_item.classList.add('random_rist_item');
            pare_box.appendChild(new_rist_item);
        }

        const randomIndex = Math.floor(Math.random() * card_list.length);
        hap = randomIndex;

        const random_rist_items = document.querySelectorAll('.random_rist_item');

        card_list.forEach((item, index) => {
            const itemName = item.querySelector('.item_nname').innerText.trim();
            const matched = random_list.find(list => list.name === itemName);

            if (matched) {
                random_rist_items[index].innerHTML = `
                    <p class="random_rist_item_name">${matched.name}</p>
                    <img src="image/${matched.img}" alt="">
                `;
            }
        });

        rani = setInterval(() => {
            random_ani();
        }, 300);

        setTimeout(() => {
            clearInterval(rani);
            highlightWinner();
        }, 5000);
    } else {
        alert('Please select at least two');
    }
}


function random_ani() {
    const random_rist_items = document.querySelectorAll('.random_rist_item');

    if (random_rist_items.length <= 1) return;

    random_rist_items.forEach(item => {
        item.style.opacity = '0.5';
    });

    random_rist_items[currentIndex].style.opacity = '1';

    currentIndex++;
    if (currentIndex >= random_rist_items.length) {
        currentIndex = 0;
    }
}


function highlightWinner() {
    const random_rist_items = document.querySelectorAll('.random_rist_item');

    random_rist_items.forEach((item, index) => {
        if (index !== hap) {
            item.remove();
        } else {
            item.style.opacity = '1';
            item.style.width = '100%';
            item.style.height = '100%';

            const gobtn = document.createElement('span');
            item.appendChild(gobtn);
            gobtn.classList.add('ran_gobtn');
            gobtn.innerHTML = '↑';

            const reset = document.createElement('img');
            item.appendChild(reset);
            reset.classList.add('ram_imgg');
            reset.src = 'image/drag/reset.png';

            document.querySelector('.random_rist_container').style.width = '100%';
            document.querySelector('.random_rist_container').style.height = '100%';
            document.querySelector('.random_rist_item').style.margin = '0';
            document.querySelector('.random_rist_item_name').style.bottom = '30px';
            document.querySelector('.random_rist_item_name').style.left = '30px';
            document.querySelector('.random_rist_item_name').style.fontSize = '50px';
        }
    });
}
function jum_create() {
    const jum = Math.floor(window.innerWidth / 25);
    const jum_box1 = document.querySelector('.jum_box1');
    const jum_box2 = document.querySelector('.jum_box2');

    jum_box1.innerHTML = '';
    jum_box2.innerHTML = '';

    for(let p = 1; p <= jum; p++) {
        const new_jum1 = document.createElement('div');
        new_jum1.classList.add('jum');
        jum_box1.appendChild(new_jum1);

        const new_jum2 = document.createElement('div');
        new_jum2.classList.add('jum');
        jum_box2.appendChild(new_jum2);
    }

    setColors();
}

function setColors() {
    document.querySelectorAll('.jum_box1 .jum').forEach((item, index) => {
        item.style.backgroundColor = index % 2 === 0 ? '#005ab5' : 'white';
    });
    document.querySelectorAll('.jum_box2 .jum').forEach((item, index) => {
        item.style.backgroundColor = index % 2 === 0 ? '#005ab5' : '#0080FF';
    });
}

window.addEventListener('resize', () => {
    jum_create();
});

window.addEventListener('DOMContentLoaded', () => {
    jum_create();
});



let sea_count1 = 0;
let sea_count2 = 0;

const sea_block1 = document.querySelector('.jum_box1');
const sea_block2 = document.querySelector('.jum_box2');

function sea_set(count, box, leri) {
    if(count > box.scrollWidth / 2) {
        box.style.transform = `translateX(0px)`;
        return 0;
    } else {
        box.style.transform = `translateX(${leri * count}px)`;
        return count;
    }
}

function sea_ani() {
    sea_count1++;
    sea_count2++;
    sea_count1 = sea_set(sea_count1, sea_block1, -1);
    sea_count2 = sea_set(sea_count2, sea_block2, 1);
    window.requestAnimationFrame(sea_ani);
}

sea_ani();